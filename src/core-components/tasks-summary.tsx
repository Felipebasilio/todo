import { Badge, Text } from "@/components";

export default function TasksSummary() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">Tarefas criadas</Text>
        <Badge variant="secondary" size="sm">5</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">Concluídas</Text>
        <Badge variant="primary" size="sm">2 de 5</Badge>
      </div>
    </>
  )
}