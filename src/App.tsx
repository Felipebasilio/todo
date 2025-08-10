import { BrowserRouter, Route, Routes } from "react-router"
import PagesComponents from "./pages/pages-components"
import LayoutMain from "./pages/layout-main"
import HomePage from "./pages/home-page"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<HomePage />} />
          <Route path="/components" element={<PagesComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
