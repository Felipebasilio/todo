import { delay } from "@/helpers/utils";
import { TASK_KEY, TaskStatus, type Task } from "@/models";
import { useState } from "react";
import useLocalStorage from "use-local-storage";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASK_KEY, []);
  const [isUpdatingTasks, setIsUpdatingTasks] = useState(false);
  const [isDeletingTasks, setIsDeletingTasks] = useState(false);

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 15),
        title: "",
        isConcluded: false,
        status: TaskStatus.Creating,
      },
    ]);
  }

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setIsUpdatingTasks(true);
    await delay(1000);
    setIsUpdatingTasks(false);
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: TaskStatus.Created, ...payload }
          : task
      )
    );
  }

  async function updateTaskStatus(id: string, isConcluded: Task["isConcluded"]) {
    setIsUpdatingTasks(true);
    await delay(1000);
    setIsUpdatingTasks(false);
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, isConcluded }
          : task
      )
    );
  }

  async function deleteTask(id: string) {
    setIsDeletingTasks(true);
    await delay(1000);
    setIsDeletingTasks(false);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return { prepareTask, updateTask, updateTaskStatus, deleteTask, isUpdatingTasks, isDeletingTasks };
}
