import React, { Fragment, useState } from 'react'
import toast from 'react-hot-toast'
import { IoMdCloseCircle } from 'react-icons/io'
import { MdCheckCircle, MdEdit, MdOutlineDeleteOutline } from 'react-icons/md'
import { v4 as createId } from 'uuid'

const Todo = () => {

    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState("")
    const [currentEditable, setCurrentEditable] = useState("")
    const [editTask, setEditTask] = useState("")

    const handleTodo = () => {
        if (!todo) {
            return toast.error("Task is required!")
        } 
        const exist = todoList.findIndex((element) => element.task.toLowerCase() == todo.toLowerCase())
        if (exist > -1) {
            return toast.error("Task already exist")
        }
        if (todo.length < 5) {
            return toast.error("Minimum 5 characters")
        }
        const taskObject = {
            id: createId(),
            task: todo,
            completed: false,
            createdAt: new Date().toLocaleString("en-IN"),
            updatedAt: new Date().toLocaleString("en-IN"),
        }
        setTodoList([taskObject, ...todoList])
        setTodo("")
        return toast.success("Task added")
    }

    const handleRemove = (removeId) => {
        const res = todoList.filter((todo) => todo.id != removeId)
        setTodoList(res)
    }

    const handleStatusUpdate = (taskId) => {
        const res = todoList.map(todo => {
            if (todo.id == taskId) {
                return {...todo, completed: !todo.completed, updatedAt: new Date().toLocaleString("en-IN")}
            }
            return todo
        })
        setTodoList(res)
    }

    const handleEdit = (todo) => {
        setCurrentEditable(todo.id)
        setEditTask(todo.task)
    }

    const handleUpdate = () => {
        if (!editTask) {
            return toast.error("Task is required!")
        } 
        const exist = todoList.find((element) => element.task.toLowerCase() == editTask.toLowerCase())
        console.log(exist, currentEditable)
        if (exist && exist.id != currentEditable) {
            return toast.error("Task already exist")
        }
        if (editTask.length < 5) {
            return toast.error("Minimum 5 characters")
        }
        const res = todoList.map(todo => {
            if (todo.id == currentEditable) {
                return {...todo, task: editTask, updatedAt: new Date().toLocaleString("en-IN")}
            }
            return todo
        })
        setTodoList(res)
        setEditTask("")
        setCurrentEditable("")
    }

    return (
        <div className="">
            <div className="mt-4 d-flex flex-column align-items-center">
                <input type="text" placeholder="Eg: Develop a web app" name="todo" value={todo} onChange={(event) => setTodo(event.target.value)} className="p-2 w-50 rounded border border-secondary" style={{outline: 0}}/>
                <button onClick={handleTodo} className="btn btn-secondary w-50 mt-3">Add Todo</button>
            </div>
            <div className="d-flex flex-column align-items-center mt-4 gap-2">
                <h3>Pending Tasks - ({todoList.filter(t=>!t.completed).length})</h3>
                {
                    todoList.filter(todo => !todo.completed).map((todo) => {
                        return (
                            <div key={todo.id} className="p-3 bg-dark text-light rounded w-50 d-flex justify-content-between">
                                <div>
                                    <div>ID: {todo.id}</div>
                                    <div className="">Task: {currentEditable == todo.id ? <Fragment>
                                        <input type='text' className='me-1' placeholder='Enter task' onChange={(event) => setEditTask(event.target.value)} value={editTask} />
                                        <button className='btn btn-sm btn-primary' onClick={handleUpdate}>Update</button>
                                    </Fragment> : todo.task}</div>
                                    <div>Status: {todo.completed ? "Completed" : "Pending"}</div>
                                    <div>Updated: {todo.updatedAt}</div>
                                </div>
                                <div className="d-flex flex-column gap-3 justify-content-between">
                                    <MdOutlineDeleteOutline size={20} cursor={"pointer"} onClick={() => handleRemove(todo.id)} />
                                    {currentEditable != todo.id && <MdEdit size={20} cursor={"pointer"} onClick={() => handleEdit(todo)}/>}
                                    <MdCheckCircle size={20} cursor={"pointer"} onClick={() => handleStatusUpdate(todo.id)} />    
                                </div>
                            </div>
                        )
                    })
                }
                <h3>Completed Tasks - ({todoList.filter(t=>t.completed).length})</h3>
                {
                    todoList.filter(todo => todo.completed).map((todo) => {
                        return (
                            <div key={todo.id} className="p-3 bg-dark text-light rounded w-50 d-flex justify-content-between">
                                <div>
                                    <div>ID: {todo.id}</div>
                                    <div>Task: {todo.task}</div>
                                    <div>Status: {todo.completed ? "Completed" : "Pending"}</div>
                                    <div>Updated: {todo.updatedAt}</div>
                                </div>
                                <div className="d-flex flex-column gap-3 justify-content-between">
                                    <MdOutlineDeleteOutline size={20} cursor={"pointer"} onClick={() => handleRemove(todo.id)} />
                                    <IoMdCloseCircle size={20} color='red' cursor={"pointer"} onClick={() => handleStatusUpdate(todo.id)}/>    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todo
