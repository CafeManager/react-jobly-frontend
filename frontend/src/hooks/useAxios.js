import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

function useAxios(endpoint = "") {
    const [data, setData] = useState([]);

    async function addUrlRequest(url) {
        const res = await axios.get(url + endpoint);
        setData({ ...res.data });
        return res;
    }

    return [data, addUrlRequest];
}

export default useAxios;
