import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { TodoContext } from "../Providers/TodoProvider"

const EditPage = () => {

    const { id } = useParams()
    const { todoList, setTodoList} = useContext(TodoContext)
    const [todo, setTodo] = useState((todoList.find(item => item.id == id))?.task)

    const navigate = useNavigate()

    const handleUpdate = () => {
        const res = todoList.map(item => {
            if (item.id == id) {
                return {...item, task: todo, updatedAt: new Date().toLocaleString("en-IN")}
            }
            return item
        })
        setTodoList(res)
        navigate("/todo")
    }

    return (
        <div>
            <input type="text" placeholder="Enter Task" value={todo} onChange={(event) => setTodo(event.target.value)}/>
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default EditPage
