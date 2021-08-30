import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Feed from '../pages/Feed/Feed'
import Post from '../pages/PostPage/PostPage'
import Registration from '../pages/Registration/Registration'
import ErrorPage  from '../pages/ErrorPage/error'
import Home from '../pages/HomePage/Home'
import Header from '../components/Header/Header'
const Router = () => {
    return(
        <BrowserRouter>
        <Header />
        <Switch>
        <Route exact path={"/"}>
                <Home />
            </Route>

            <Route exact path={"/login"}>
                <Login />
            </Route>
            
            <Route exact path={"/feed"}>
                <Feed />
            </Route>

            <Route exact path={"/post"}>
                <Post />
            </Route>

            <Route exact path={"/registration"}>
                <Registration />
            </Route>

            <Route>
                <ErrorPage />
            </Route>

        </Switch>
        </BrowserRouter>
    )

}

export default Router