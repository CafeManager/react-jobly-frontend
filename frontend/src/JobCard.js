function JobCard({ title, companyName, equity, salary }) {
    return (
        <>
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
                    <h5 className="text-start card-title">{title}</h5>
                    <p className="fs-5 text-start card-text">{companyName}</p>

                    <p className="fs-6 text-start card-text mb-1">
                        Salary: {salary}
                    </p>
                    <p className="fs-6 text-start card-text">
                        Equity: {equity}
                    </p>
                </div>
            </div>
        </>
    );
}

export default JobCard;
