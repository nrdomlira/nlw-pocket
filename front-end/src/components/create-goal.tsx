import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "./ui/radio-group";

export function CreateGoal() {
  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadastrar Meta</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-500" />
            </DialogClose>
          </div>
          <DialogDescription>
            Adicione atividades que{" "}
            <span className="underline">te fazem bem</span> e que você quer
            continuar praticando toda semana.
          </DialogDescription>
        </div>

        <form action="" className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              {" "}
              <Label htmlFor="title">Qual a atividade?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Praticar exercícios, meditar, etc..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Quantas vezes na semana?</Label>
              <RadioGroup defaultValue="3">
                <RadioGroupItem value="1">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    1x na semana
                  </span>{" "}
                  <span className="text-sm leading-none">🥱</span>
                </RadioGroupItem>
                <RadioGroupItem value="2">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    2x na semana
                  </span>{" "}
                  <span className="text-sm leading-none">🙂</span>
                </RadioGroupItem>
                <RadioGroupItem value="3">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    3x na semana
                  </span>{" "}
                  <span className="text-sm leading-none">😎</span>
                </RadioGroupItem>
              </RadioGroup>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button variant="secondary" className="flex-1">
                Fechar
              </Button>
            </DialogClose>

            <Button className="flex-1">Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  );
}
