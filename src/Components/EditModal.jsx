import React, { useContext } from 'react'
import { TodoContext } from '../App'

const EditModal = () => {

    const { handleUpdate, setEditTask, editTask, setEditableTask } = useContext(TodoContext)

    return (
        <div className='w-100 bg-dark bg-opacity-75 position-fixed top-0 start-0 d-flex justify-content-center pt-4' style={{height: "100vh"}}>
            <div className='d-flex flex-column gap-3 align-items-center w-100'>
                <input type="text" className='p-2 w-50 rounded' onChange={(e) => setEditTask(e.target.value)} value={editTask} style={{outline: 0, border: 0}}/>
                <div className='d-flex gap-3 w-50'>
                    <button className='btn w-100 btn-success w-50' onClick={handleUpdate}>Add</button>
                    <button className='btn w-100 btn-danger w-50' onClick={() => setEditableTask(null)}>close</button>
                </div>
            </div>
        </div>
    )
}

export default EditModal
