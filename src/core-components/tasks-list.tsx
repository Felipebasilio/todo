import { Button } from "@/components";
import PlusIcon from "@/assets/icons/plus.svg?react";
import { TaskItem } from ".";

export default function TasksList() {
  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full" >Nova tarefa</Button>
      </section>

      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  )
}