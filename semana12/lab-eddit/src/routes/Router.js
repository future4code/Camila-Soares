import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/homePage/Home'
import Error from '../pages/errorPage/Error'
import Feed from '../pages/feed/Feed'
import Login from '../pages/login/Login'
import Post from '../pages/postPage/Post'
import SignUp from '../pages/signUp/SignUp'
import { Header }from '../components/Header'

const Router = () => {
    return(
        <BrowserRouter>
        {/* <Header/> */}
        <Switch>
        <Route exact path={"/"}>
            <Home />
        </Route>

        <Route exact path={"/login"}>
            <Login/>
        </Route>

        <Route exact path={"/feed"}>
            <Feed/>
        </Route>

        <Route exact path={"/post"}>
            <Post/>
        </Route>

        <Route exact path={"/signUp"}>
            <SignUp/>
        </Route>
        <Route exact path={"/home"}>
            <Home />
        </Route>
        
        <Route>
            <Error/>
        </Route>

          </Switch>
        </BrowserRouter>
    )
}

export default Router