import { Button } from "@/components";
import PlusIcon from "@/assets/icons/plus.svg?react";
import { TaskItem } from ".";
import useTask from "@/hooks/use-task";
import useTasks from "@/hooks/use-tasks";
import { TaskStatus, type Task } from "@/models";

export default function TasksList() {
  const { tasks, isLoadingTasks } = useTasks();
  const { prepareTask } = useTask();

  function handlePrepareTask() {
    prepareTask();
  }

  function isCreatingTask() {
    return tasks.some((task) => task.status === TaskStatus.Creating);
  }

  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full" onClick={handlePrepareTask} disabled={isCreatingTask() || isLoadingTasks}>Nova tarefa</Button>
      </section>

      <section className="space-y-2">
        {!isLoadingTasks ? (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task}/>
          ))
        ) : (
          <>
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
          </>
        )}
      </section>
    </>
  )
}