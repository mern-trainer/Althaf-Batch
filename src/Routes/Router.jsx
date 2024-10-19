import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UseEffect from '../Pages/UseEffect'
import SingleView from '../Components/SingleView'
import Todo from '../Pages/Todo'
import ViewTodo from '../Pages/ViewTodo'
import EditPage from '../Pages/EditPage'
import NotFound from '../Pages/NotFound'

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={UseEffect} />
                <Route path="single-view">
                    <Route path=":id" Component={SingleView} />
                </Route>
                <Route path="todo">
                    <Route path="" Component={Todo} />
                    <Route path="view">
                        <Route path=":id" Component={ViewTodo} />
                    </Route>
                    <Route path="edit">
                        <Route path=":id" Component={EditPage} />
                    </Route>
                </Route>
            </Route>
            <Route path="*" Component={NotFound} />
        </Routes>
    </BrowserRouter>
}

export default Router
