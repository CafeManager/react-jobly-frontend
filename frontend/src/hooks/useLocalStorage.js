import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

function useLocalStorage() {
    const [data, setData] = useState();

    function getLocalItem(item) {
        return localStorage.getItem(item) ? localStorage.getItem(item) : "";
    }

    function setLocalItem(itemKey, value) {
        localStorage.setItem(itemKey, value);
    }

    function clearItem(item) {
        localStorage.removeItem(item);
    }

    return [getLocalItem, setLocalItem, clearItem];
}

export default useLocalStorage;
