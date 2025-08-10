import { Container } from "@/components";
import { TasksList, TasksSummary } from "@/core-components";

export default function HomePage() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>

      <TasksList />
    </Container>
  )
}