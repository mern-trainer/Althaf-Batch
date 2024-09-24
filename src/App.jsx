import { Fragment } from "react"
import LandingPage from "./Pages/LandingPage"
import Todo from "./Pages/Todo"
import { Toaster } from "react-hot-toast"
import ShopPage from "./Pages/ShopPage"
import A from "./Components/A"


const App = () => {
    return <Fragment>
        {/* <LandingPage /> */}
        {/* <Todo /> */}
        <ShopPage />
        {/* <A /> */}
        <Toaster position="top-right"/>
    </Fragment>
}

export default App