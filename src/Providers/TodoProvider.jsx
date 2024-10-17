import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
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

    return <TodoContext.Provider value={{ todoList, setTodoList, editableTask, setEditableTask, editTask, setEditTask, handleUpdate }}>
        { children }
    </TodoContext.Provider>
}