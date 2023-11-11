import { Route, Switch, Redirect } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyDetails from "./CompanyDetails";
import JobList from "./JobList";
import Profile from "./Profile";
import LoginForm from "./LoginForm";
import LogOutForm from "./LogOutForm";
import Home from "./Home";

function Routes() {
    <>
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
        <Route exact path="/">
            <Home></Home>
        </Route>

        <Route path="*">
            <Redirect to="/"></Redirect>
        </Route>
    </>;
}
export default Routes;
