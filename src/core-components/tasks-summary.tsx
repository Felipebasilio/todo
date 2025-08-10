import { Badge, Text } from "@/components";
import useTasks from "@/hooks/use-tasks";
import { TaskStatus } from "@/models";

export default function TasksSummary() {
  const { tasks, isLoadingTasks } = useTasks();

  function getTasksSummary() {
    const tasksCreated = tasks.filter((task) => task.status === TaskStatus.Created).length;
    const tasksConcluded = tasks.filter((task) => task.isConcluded).length;

    return {
      tasksCreated,
      tasksConcluded,
    };
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">Tarefas criadas</Text>
        <Badge variant="secondary" size="sm" loading={isLoadingTasks}>{getTasksSummary().tasksCreated}</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">Concluídas</Text>
        <Badge variant="primary" size="sm" loading={isLoadingTasks}>{getTasksSummary().tasksConcluded} de {getTasksSummary().tasksCreated}</Badge>
      </div>
    </>
  )
}