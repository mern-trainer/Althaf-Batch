import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

const Form = () => {

    const [formData, setFormData] = useState({username: "", password: ""})

    const handleFormChange = (event) => {
        const { name, value } = event.target
        setFormData({...formData, [name]: value})
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        // if (formData.username == "" && formData.password == "") {
        //     return toast.error("All fields are required")
        // }
        // if (formData.username == "") {
        //     return toast.error("Username is required")
        // }
        // if (formData.username.length < 4 || formData.username.length > 12) {
        //     return toas
        // }
        // const response = await axios.post("http://127.0.0.1:8080/api/form-submit", formData)
        // console.log(response.data)
    }

    return <div className="d-flex justify-content-center mt-4">
        <div className="w-50">
            <form className="d-flex flex-column gap-2 w-100" onSubmit={handleFormSubmit}>
                <input type="text" name="username" onChange={handleFormChange} value={formData.username} placeholder="Enter username..." className="p-2"/>
                <input type="password" name="password" onChange={handleFormChange} value={formData.password} placeholder="Enter password..." className="p-2"/>
                <button className="btn btn-success w-100 rounded-0 p-2">SignIn</button>
            </form>
        </div>
    </div>
}

export default Form
