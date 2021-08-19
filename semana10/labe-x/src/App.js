import React from 'react'
import HomePage from './pages/HomePage'
import AdminHomePage from './pages/AdminHomePage'
import ApplicationFormPage from './pages/ApplicationFormPage'
import ListTripsPage from './pages/ListTripsPage'
import LoginPage from './pages/LoginPage'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import TripDetailsPage from './pages/TripDetailsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={"/trips/list"}>
          <ListTripsPage />
        </Route>
        <Route exact path={"/trips/application"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/"}>
          <HomePage />
        </Route>
   
        <Route exact path={"/login"}>
          <AdminHomePage />
        </Route>

      <Route exact path={"/admin/trips/list"}>
      <LoginPage />
      </Route>

      <Route exact path={"/admin/trips/create"}>
        <TripDetailsPage />
      </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App