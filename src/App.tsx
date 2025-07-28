import { Text, Button, ButtonIcon, InputText, InputCheckbox } from "./components"
import TrashIcon from "./assets/icons/trash.svg?react"

function App() {
  return (
    <>
      <Text as="h2" variant="body-sm-bold">
        Hello world!
      </Text>
      <Button icon={TrashIcon}>Button</Button>
      <ButtonIcon icon={TrashIcon} variant="secondary" size="sm" />
      <InputText />
      <InputCheckbox />
    </>
  )
} 

export default App
