import { Fragment } from "react"
import LandingPage from "./Pages/LandingPage"
import Todo from "./Pages/Todo"
import { Toaster } from "react-hot-toast"


const App = () => {
    return <Fragment>
        {/* <LandingPage /> */}
        <Todo />
        <Toaster position="top-right"/>
    </Fragment>
}

export default App