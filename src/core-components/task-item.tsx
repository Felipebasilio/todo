import { ButtonIcon, Card, InputCheckbox, InputText, Skeleton, Text } from "@/components";
import TrashIcon from "@/assets/icons/trash.svg?react";
import PencilIcon from "@/assets/icons/pencil.svg?react";
import XIcon from "@/assets/icons/x.svg?react";
import CheckIcon from "@/assets/icons/check.svg?react";
import { useState } from "react";
import { TaskStatus, type Task } from "@/models";
import { cx } from "class-variance-authority";
import useTask from "@/hooks/use-task";

interface TaskItemProps {
  task: Task;
  loading?: boolean;
}

export default function TaskItem({ task, loading }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task.status === TaskStatus.Creating);
  const [taskTitle, setTaskTitle] = useState(task.title || "");
  const { updateTask, updateTaskStatus, deleteTask, isUpdatingTasks, isDeletingTasks } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    if (task.status === TaskStatus.Creating) {
      deleteTask(task.id);
    }

    setIsEditing(false);
  }
  
  function handleChangeTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value || "");
  }

  async function handleSaveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsEditing(false);
    await updateTask(task.id, { title: taskTitle });
  }

  async function handleChangeTaskStatus(event: React.ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked; 
    await updateTaskStatus(task.id, checked);
  }

  async function handleClickDeleteTask() {
    await deleteTask(task.id);
  }

  return (
    <Card size="md">
      {isEditing ? (
        <form className="flex items-center gap-4" onSubmit={handleSaveTask}>
          <InputText className="flex-1" value={taskTitle} onChange={handleChangeTaskTitle} required autoFocus />

          <div className="flex gap-1">
            <ButtonIcon icon={XIcon} variant="secondary" size="sm" onClick={handleExitEditTask} type="button" />
            <ButtonIcon icon={CheckIcon} variant="primary" size="sm" type="submit" handling={isUpdatingTasks} />
          </div>
        </form>
      ) : (
        <div className="flex items-center gap-4">
          <InputCheckbox value={task?.isConcluded?.toString()} checked={task?.isConcluded} onChange={handleChangeTaskStatus} loading={loading} />

          {!loading ? (
            <Text className={cx("flex-1", task?.isConcluded && "line-through")}>
              {task?.title}
            </Text>
          ) : (
            <Skeleton className="h-6 flex-1" />
          )}

          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" size="sm" type="button" onClick={handleClickDeleteTask} loading={loading} handling={isDeletingTasks} />
            <ButtonIcon icon={PencilIcon} variant="tertiary" size="sm" onClick={handleEditTask} type="button" loading={loading} handling={isUpdatingTasks} />
          </div>
        </div>
      )}
    </Card>
  )
}