import dayjs from "dayjs";
import { and, asc, count, eq, gte, lte, sql } from "drizzle-orm";
import { db } from "../db";
import { goalCompletions, goals } from "../db/schema";

export async function getWeekSummary() {
  const firstDayOfWeek = dayjs().startOf("week").toDate();
  const lastDayOfWeek = dayjs().endOf("week").toDate();

  const goalsCreatedUpToWeek = db.$with("goals_created_up_to_week").as(
    db
      .select({
        id: goals.id,
        title: goals.title,
        desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
        createdAt: goals.createdAt,
      })
      .from(goals)
      .where(lte(goals.createdAt, lastDayOfWeek))
  );

  const goalsCompletedInWeek = db.$with("goal_completed_in_week").as(
    db
      .select({
        id: goalCompletions.id,
        title: goals.title,
        createdAt: goalCompletions.createdAt,
        completionDate: sql/*sql*/ `DATE(${goalCompletions.createdAt})`.as(
          "completionDate"
        ),
      })
      .from(goalCompletions)
      .orderBy(asc(goalCompletions.createdAt))
      .innerJoin(goals, eq(goals.id, goalCompletions.goalId))
      .where(
        and(
          gte(goalCompletions.createdAt, firstDayOfWeek),
          lte(goalCompletions.createdAt, lastDayOfWeek)
        )
      )
  );

  const goalsCompletedByWeekDay = db.$with("goals_completed_by_week_day").as(
    db
      .select({
        completionDate: goalsCompletedInWeek.completionDate,
        completions: sql/*sql */ `
          JSON_AGG(
            JSON_BUILD_OBJECT(
              'id', ${goalsCompletedInWeek.id},
              'title', ${goalsCompletedInWeek.title},
              'createdAt', ${goalsCompletedInWeek.createdAt}
            )
          )
          `.as("completions"),
      })
      .from(goalsCompletedInWeek)
      .groupBy(goalsCompletedInWeek.completionDate)
  );

  type GoalsPerDay = Record<
    string,
    { id: string; title: string; completedAt: string }[]
  >;

  const result = await db
    .with(goalsCreatedUpToWeek, goalsCompletedInWeek, goalsCompletedByWeekDay)
    .select({
      completed:
        sql/*sql*/ `(SELECT COUNT(*) FROM ${goalsCompletedInWeek})`.mapWith(
          Number
        ),
      total:
        sql/*sql*/ `(SELECT SUM(${goalsCreatedUpToWeek.desiredWeeklyFrequency}) FROM ${goalsCreatedUpToWeek})`.mapWith(
          Number
        ),
      goalsPerDay: sql<GoalsPerDay>/*sql*/ `
        JSON_OBJECT_AGG(
            ${goalsCompletedByWeekDay.completionDate},
            ${goalsCompletedByWeekDay.completions}
          )
        `,
    })
    .from(goalsCompletedByWeekDay);

  return {
    summary: result[0],
  };
}
