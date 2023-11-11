import { useEffect, useState } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";

function JobList() {
    const [data, setData] = useState();
    const [query, setQuery] = useState("");
    console.log("JobList render");
    useEffect(() => {
        console.log("JobList useeffect");
        async function retrieveData() {
            const data = await JoblyApi.getJobs(query);
            console.log(data);
            setData(data);
        }
        retrieveData();
    }, [query]);

    function queryJobs(data) {
        setQuery(data);
    }

    function applyJob(data){
        
    }
    return (
        <>
            <SearchForm sendTerm={queryJobs} searchTerm={"title"}></SearchForm>
            {data
                ? data.map((ele, ind) => (
                      <JobCard
                          equity={ele.equity}
                          key={ind}
                          title={ele.title}
                          salary={ele.salary}
                          companyName={ele.companyName}
                      ></JobCard>
                  ))
                : null}
        </>
    );
}

export default JobList;
