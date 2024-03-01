import { Route, Routes } from "react-router-dom"
import Todo from "./pages/todo/Todo"
import User from "./pages/user/User"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Todo/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </div>
  )
}

export default App
