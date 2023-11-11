import { useEffect, useState } from "react";
import useAxios from "./hooks/useAxios";
import JoblyApi from "./api";
import { useParams, Link } from "react-router-dom";

function CompanyDetails({ handle, description, name }) {
    const param = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        async function retrieveData() {
            const data = await JoblyApi.getCompany(param.id);
            console.log(data);
            setData(data);
        }
        retrieveData();
    }, []);

    return (
        <>
            {data ? (
                <>
                    <h5>{data.name}</h5>
                    <p>{data.description}</p>
                    {data.jobs.map((element) => {
                        {
                            console.log(element);
                        }
                        return (
                            <div
                                className="card"
                                style={{
                                    width: "90%",
                                    marginTop: "1rem",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                }}
                            >
                                <div className="card-body">
                                    <p> Salary: {element.salary}</p>
                                    <p> Equity: {element.equity} </p>
                                    <button className="btn-danger"> Apply </button>
                                </div>
                            </div>
                        );
                    })}
                </>
            ) : null}

            {data ? <h1> {data.handle}</h1> : null}
        </>
    );
}

export default CompanyDetails;
