import "./App.css";
import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import CompanyList from "./CompanyList";
import CompanyDetails from "./CompanyDetails";
import JobList from "./JobList";
import Profile from "./Profile";
import LoginForm from "./LoginForm";
import Home from "./Home";
import RegisterForm from "./RegisterForm";
import useJoblyAPI from "./hooks/useJoblyAPI";

function App() {
    const [JoblyApi, clearUserInfo, username, addUserToken] = useJoblyAPI();
    const [currUser, setCurrUser] = useState(username);

    return (
        <div className="App">
            <NavBar
                username={currUser}
                setCurrUser={setCurrUser}
                clearUserInfo={clearUserInfo}
            ></NavBar>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/companies">
                    <CompanyList></CompanyList>
                </Route>
                <Route exact path="/companies/:id">
                    <CompanyDetails username={currUser}></CompanyDetails>
                </Route>
                <Route exact path="/jobs">
                    <JobList username={currUser}></JobList>
                </Route>
                <Route exact path="/user/register">
                    <RegisterForm
                        setCurrUser={setCurrUser}
                        clearUserInfo={clearUserInfo}
                    ></RegisterForm>
                </Route>
                <Route exact path="/user/login">
                    <LoginForm
                        setCurrUser={setCurrUser}
                        JoblyApi={JoblyApi}
                        addUserToken={addUserToken}
                        clearUserInfo={clearUserInfo}
                    ></LoginForm>
                </Route>

                <Route exact path="/user/:id">
                    <Profile username={currUser} JoblyApi={JoblyApi}></Profile>
                </Route>
                <Route path="*">
                    <Redirect to="/"></Redirect>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
