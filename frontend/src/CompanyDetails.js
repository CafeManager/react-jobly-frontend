import { useEffect, useState } from "react";
import useAxios from "./hooks/useAxios";
import { useParams, Link } from "react-router-dom";
import JobCard from "./JobCard";
import useJoblyAPI from "./hooks/useJoblyAPI";

function CompanyDetails({ username }) {
    const param = useParams();
    const [data, setData] = useState();

    const [JoblyApi, clearUserInfo, localUsername, addUserToken] =
        useJoblyAPI();

    const [appliedList, setAppliedList] = useState([]);
    useEffect(() => {
        async function retrieveData() {
            console.log(param);
            const data = await JoblyApi.getCompany(param.id);
            const userData = await JoblyApi.getUserData(username);
            setAppliedList(userData.applications);
            setData(data);
        }
        retrieveData();
    }, []);

    function applyToJob(id) {
        JoblyApi.applyToJob(username, id);
    }
    return (
        <>
            {data ? (
                <>
                    <h5>{data.name}</h5>
                    <p>{data.description}</p>
                    {data.jobs.map((ele, ind) => {
                        return (
                            <JobCard
                                id={ele.id}
                                equity={ele.equity}
                                key={ind}
                                title={ele.title}
                                salary={ele.salary}
                                companyName={ele.companyName}
                                appliedList={appliedList}
                                applyToJob={applyToJob}
                            >
                            </JobCard>
                        );
                    })}
                </>
            ) : null}

        </>
    );
}

export default CompanyDetails;
