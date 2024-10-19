import { useParams } from "react-router-dom"
import { TodoContext } from "../Providers/TodoProvider"
import { useContext, useState } from "react"

const ViewTodo = () => {
    
    const { id } = useParams()
    const { todoList } = useContext(TodoContext)
    const [todo] = useState(todoList.find(item => item.id == id))

    return <div>
        { todo?.task }
    </div>
}

export default ViewTodo