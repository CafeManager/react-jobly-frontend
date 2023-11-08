import JoblyApi from "./api";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [res, setRes] = useState();
    console.log(res);
    useEffect(() => {
        async function getData() {
            const company = await JoblyApi.getCompany("mitchell-brown");
            setRes(company.data);
        }
        getData();
    }, []);

    return (
        <div className="App">
            <h1> {res} </h1>
            <h2> test </h2>
        </div>
    );
}

export default App;
