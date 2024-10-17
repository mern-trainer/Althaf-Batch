import { BrowserRouter, Routes, Route } from "react-router-dom"
import UseEffect from "./Pages/UseEffect"
import SingleView from "./Components/SingleView"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={UseEffect} />
            <Route path="/single-view/:id" Component={SingleView} />
        </Routes>
    </BrowserRouter>
}

export default App