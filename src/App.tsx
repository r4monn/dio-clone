import { Route, Routes } from "react-router-dom"
import { Feed } from "./pages/Feed"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>

    </div>
  )
}

export default App
