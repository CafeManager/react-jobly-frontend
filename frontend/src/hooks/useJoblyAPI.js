import { useState } from "react";
import axios from "axios";
import uuid from "uuid";
import JoblyApi from "../api";
import useLocalStorage from "./useLocalStorage";

function useJoblyAPI() {
    const [getLocalItem, setLocalItem, clearItem] = useLocalStorage();

    const [username, setUsername] = useState(getLocalItem("joblyUsername"));

    function clearUserInfo() {
        clearItem("joblyToken");
        clearItem("joblyUsername");
        setUsername("");
    }

    function addUserToken(username, token) {
        setLocalItem("joblyToken", token);
        setLocalItem("joblyUsername", username);
    }

    return [JoblyApi, clearUserInfo, username, addUserToken];
}

export default useJoblyAPI;
