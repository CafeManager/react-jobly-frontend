import { useEffect, useState } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";

function JobList({ username = "" }) {
    const [data, setData] = useState();
    const [query, setQuery] = useState("");
    const [appliedList, setAppliedList] = useState([]);
    console.log("JobList render");
    useEffect(() => {
        console.log("JobList useeffect");
        async function retrieveData() {
            const data = await JoblyApi.getJobs(query);
            const userData = await JoblyApi.getUserData(username);
            console.log(userData);
            console.log(data);
            setAppliedList(userData.applications);
            setData(data);
        }
        retrieveData();
    }, [query]);

    function queryJobs(data) {
        setQuery(data);
    }

    function applyToJob(id) {
        JoblyApi.applyToJob(username, id);
    }
    return (
        <>
            <SearchForm sendTerm={queryJobs} searchTerm={"title"}></SearchForm>
            {data
                ? data.map((ele, ind) => (
                      <JobCard
                          id={ele.id}
                          equity={ele.equity}
                          key={ind}
                          title={ele.title}
                          salary={ele.salary}
                          companyName={ele.companyName}
                          appliedList={appliedList}
                          applyToJob={applyToJob}
                      ></JobCard>
                  ))
                : null}
        </>
    );
}

export default JobList;
