import { Outlet } from "react-router-dom"
import Home from "./components/Home/Home"

function App() {

  return (
<div className=" bg-[#080808]">
  <Home/>
  <Outlet/>
</div>
  )
}

export default App
