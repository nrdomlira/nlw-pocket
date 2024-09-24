type PendingGoalsResponse = {
  id: string;
  title: string;
  desiredWeeklyFrequancy: number;
  completionCount: number;
}[];

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch("http://localhost:3333/pending-goals");
  const data = await response.json();

  return data.pendingGoals;
}
