import { useEffect, useState } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

function CompanyList() {
    const [data, setData] = useState();
    const [query, setQuery] = useState("");
    console.log("CompanyList render");
    useEffect(() => {
        console.log("companylist useeffect");
        async function retrieveData() {
            const data = await JoblyApi.getCompanies(query);
            setData(data);
        }
        retrieveData();
    }, [query]);

    function queryCompanies(data) {
        setQuery(data);
    }
    return (
        <>
            <SearchForm
                sendTerm={queryCompanies}
                searchTerm={"name"}
            ></SearchForm>
            {data
                ? data.map((ele, ind) => (
                      <CompanyCard
                          key={ind}
                          handle={ele.handle}
                          name={ele.name}
                          description={ele.description}
                          logoUrl={ele.logoUrl}
                      ></CompanyCard>
                  ))
                : null}
        </>
    );
}

export default CompanyList;
