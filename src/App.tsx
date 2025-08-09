import { Text, Button, ButtonIcon, InputText, InputCheckbox, Skeleton, Badge } from "./components"
import TrashIcon from "./assets/icons/trash.svg?react"
import Card from "./components/Card/card"
import Container from "./components/Container/container"

function App() {
  return (
    <>
      <Container className="space-y-4">

        <Text as="h2" variant="body-sm-bold">
          Hello world!
        </Text>

        <div className="flex gap-2">
          <Badge variant="primary" size="sm">
            5
          </Badge>
          <Badge variant="secondary" size="sm">
            2 de 5
          </Badge>
          <Badge variant="primary" size="sm" loading></Badge>
        </div>

        <Button icon={TrashIcon}>Button</Button>

        <div className="flex gap-2">
          <ButtonIcon icon={TrashIcon} variant="secondary" size="sm" />
          <ButtonIcon icon={TrashIcon} variant="secondary" size="sm" loading />
        </div>

        <InputText />

        <div className="flex gap-2">
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <div>
          <Card size="md">
            Hello world!
          </Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-5" />
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-5 w-1/3" />
        </div>
      </Container>
    </>
  )
}

export default App
