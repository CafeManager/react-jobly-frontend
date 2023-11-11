import { useState } from "react";

function Home() {
    const [name, setName] = useState("Placeholder");

    return (
        <>
            <h1 style={{ marginTop: "20vh" }}> Jobly </h1>
            <p> All the jobs in one, convenient place.</p>
            <h1> Welcome Back, {name}</h1>
        </>
    );
}

export default Home;
