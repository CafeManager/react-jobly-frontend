import JoblyApi from "./api";
import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import CompanyList from "./CompanyList";
import CompanyDetails from "./CompanyDetails";
import JobList from "./JobList";
import Profile from "./Profile";
import LoginForm from "./LoginForm";
import LogOutForm from "./LogOutForm";
import Home from "./Home";

import Routes from "./Routes";

function App() {
    const [res, setRes] = useState();

    return (
        <div className="App">
            <NavBar></NavBar>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>

                <Route exact path="/companies">
                    <CompanyList></CompanyList>
                </Route>
                <Route exact path="/companies/:id">
                    <CompanyDetails></CompanyDetails>
                </Route>
                <Route exact path="/jobs">
                    <JobList></JobList>
                </Route>
                <Route exact path="/user/:id">
                    <Profile></Profile>
                </Route>
                <Route exact path="/user/login">
                    <LoginForm></LoginForm>
                </Route>
                <Route exact path="/user/logout">
                    <LogOutForm></LogOutForm>
                </Route>
                <Route path="*">
                    <Redirect to="/"></Redirect>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
