import { Route, Redirect } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyDetails from "./CompanyDetails";
import JobList from "./JobList";
import Profile from "./Profile";
import LoginForm from "./LoginForm";
import Home from "./Home";
import RegisterForm from "./RegisterForm";

function Routes({ setCurrUser, JoblyApi, addUserToken, username }) {
    <>
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
        <Route exact path="/user/register">
            <RegisterForm setCurrUser={setCurrUser}></RegisterForm>
        </Route>
        <Route exact path="/user/login">
            <LoginForm
                setCurrUser={setCurrUser}
                JoblyApi={JoblyApi}
                addUserToken={addUserToken}
            ></LoginForm>
        </Route>

        <Route exact path="/user/:id">
            <Profile username={username} JoblyApi={JoblyApi}></Profile>
        </Route>
        <Route path="*">
            <Redirect to="/"></Redirect>
        </Route>
    </>;
}
export default Routes;
