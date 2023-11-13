import { useState } from "react";

function JobCard({
    id,
    title,
    companyName,
    equity,
    salary,
    appliedList,
    applyToJob,
}) {
    const [applied, setApplied] = useState(appliedList.includes(id));

    const handleOnClick = () => {
        applyToJob(id);
        setApplied(!applied);
    };

    return (
        <>
            <div
                className="card"
                style={{
                    width: "70%",
                    marginTop: "1rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "start",
                }}
            >
                <div className="card-body">
                    <h5 className="text-start card-title">{title}</h5>
                    <p className="fs-5 text-start card-text">{companyName}</p>

                    <p className="fs-6 text-start card-text mb-1">
                        Salary: {salary}
                    </p>
                    <p className="fs-6 text-start card-text">
                        Equity: {equity}
                    </p>
                    {!applied ? (
                        <button
                            onClick={handleOnClick}
                            className="btn btn-danger d-block ms-auto"
                        >
                            APPLY
                        </button>
                    ) : (
                        <button
                            disabled
                            className="btn btn-danger d-block ms-auto"
                        >
                            APPLIED
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default JobCard;
