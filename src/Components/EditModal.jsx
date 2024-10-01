import React from 'react'

const EditModal = ({ handleUpdate, setEditTask, editTask, setEditableTask }) => {
    return (
        <div className='w-100 bg-dark bg-opacity-50 position-fixed top-0 start-0 d-flex justify-content-center pt-5' style={{height: "100vh"}}>
            <div className='d-flex flex-column gap-3'>
                <input type="text" onChange={(e) => setEditTask(e.target.value)} value={editTask} />
                <button className='btn btn-primary' onClick={handleUpdate}>Add</button>
                <button onClick={() => setEditableTask(null)}>close</button>
            </div>
        </div>
    )
}

export default EditModal
