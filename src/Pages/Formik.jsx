// form management library

import { useFormik } from "formik"
import * as yup from "yup"

const Formik = () => { 
    
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirm_password: ""
        },
        onSubmit: ({ username, password, confirm_password }) => {
            console.log(username, password, confirm_password)
        },
        validationSchema: yup.object().shape({
            username: yup.string()
                .required("Username is required")
                .min(4, "Min: 4")
                .max(12, "Max: 12"),
            password: yup.string()
                .required("Password is required")
                .min(8, "Min: 8")
                .max(16, "Max: 16"),
            confirm_password: yup.string()
                .required("Confirm Password is required")
                .oneOf([yup.ref("password")], "Password doesn't match")
            
        })
        // validate: ({ username, password }) => {
        //     if (username == "" && password == "") {
        //         return {
        //             username: "Username is required",
        //             password: "Password is required"
        //         }
        //     }
        //     if (username == "") {
        //         return { username: "Username is required" }
        //     }

        //     if (password == "") {
        //         return { password: "Password is required" }
        //     }
        // }
    })
    
    return <div className="d-flex justify-content-center mt-4">
        <div className="w-50">
            <form className="d-flex flex-column gap-2 w-100" onSubmit={formik.handleSubmit}>
                <input type="text" name="username" onChange={formik.handleChange} value={formik.values.username} placeholder="Enter username..." className="p-2"/>
                <span>{formik.errors.username}</span>
                <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="Enter password..." className="p-2" />
                <span>{formik.errors.password}</span>
                <input type="password" name="confirm_password" onChange={formik.handleChange} value={formik.values.confirm_password} placeholder="Confirm password..." className="p-2" />
                <span>{formik.errors.confirm_password}</span>
                <button type="submit" className="btn btn-success w-100 rounded-0 p-2">SignIn</button>
            </form>
        </div>
    </div>
}

export default Formik
