import { createContext, Fragment, useState } from "react"
import LandingPage from "./Pages/LandingPage"
import Todo from "./Pages/Todo"
import toast, { Toaster } from "react-hot-toast"
import ShopPage from "./Pages/ShopPage"
import A from "./Components/A"
import ContextPage from "./Pages/ContextPage"

export const TodoContext = createContext()
export const CartContext = createContext()

const App = () => {

    // const [counter, setCounter] = useState(0)
    const [todoList, setTodoList] = useState([])
    const [editableTask, setEditableTask] = useState(null)
    const [editTask, setEditTask] = useState("")

    const handleUpdate = () => {
        if (!editTask) {
            return toast.error("Task is required!")
        } 
        const exist = todoList.find((element) => element.task.toLowerCase() == editTask.toLowerCase())
        if (exist && exist.id != editableTask.id) {
            return toast.error("Task already exist")
        }
        if (editTask.length < 5) {
            return toast.error("Minimum 5 characters")
        }
        const res = todoList.map(todo => {
            if (todo.id == editableTask.id) {
                return {...todo, task: editTask, updatedAt: new Date().toLocaleString("en-IN")}
            }
            return todo
        })
        setTodoList(res)
        setEditTask("")
        setEditableTask(null)
    }

    const [cartList, setCartList] = useState([])

    return <TodoContext.Provider value={{todoList, setTodoList, editableTask, setEditableTask, editTask, setEditTask, handleUpdate}}> 
        {/* <LandingPage /> */}
        {/* <Todo /> */}
        {/* <ContextPage /> */}
        <CartContext.Provider value={{cartList, setCartList}}>
            <ShopPage />
        </CartContext.Provider>
        {/* <A /> */}
        <Toaster position="top-right"/>
    </TodoContext.Provider>
}

export default App