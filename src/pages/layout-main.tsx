import { Outlet } from "react-router";
import { Footer, Header, MainContent } from "@/core-components";

export default function LayoutMain() {
  return (
    <>
      <Header />

      <MainContent>
        <Outlet />
      </MainContent>

      <Footer />
    </>
  )
}