import { ButtonIcon, Card, InputCheckbox, InputText, Text } from "@/components";
import TrashIcon from "@/assets/icons/trash.svg?react";
import PencilIcon from "@/assets/icons/pencil.svg?react";
import XIcon from "@/assets/icons/x.svg?react";
import CheckIcon from "@/assets/icons/check.svg?react";
import { useState } from "react";

export default function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleCancelEditTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {isEditing ? (
        <>
          <InputText className="flex-1" />

          <div className="flex gap-1">
            <ButtonIcon icon={XIcon} variant="secondary" size="sm" onClick={handleCancelEditTask} />
            <ButtonIcon icon={CheckIcon} variant="primary" size="sm" />
          </div>
        </>
      ) : (
        <>
          <InputCheckbox />

          <Text className="flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </Text>

          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" size="sm" />
            <ButtonIcon icon={PencilIcon} variant="tertiary" size="sm" onClick={handleEditTask} />
          </div>
        </>
      )}
    </Card>
  )
}