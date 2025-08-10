import { delay } from "@/helpers/utils";
import { TASK_KEY, TaskStatus, type Task } from "@/models";
import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASK_KEY, []);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(1000);
      setIsLoadingTasks(false);
    }

    setTasks(tasksData);
  }

  useEffect(() => {
    fetchTasks();
  }, [tasksData]);

  const tasksCount = tasks.filter((task) => task.status === TaskStatus.Created).length;
  const concludedTaskCount = tasks.filter((task) => task.isConcluded).length;

  return { tasks, tasksCount, concludedTaskCount, isLoadingTasks };
}