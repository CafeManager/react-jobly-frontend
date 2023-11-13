import { Link } from "react-router-dom";

function CompanyCard({ handle, logoUrl, name, description }) {
    return (
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
            <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/companies/${handle}`}
            >
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </Link>
        </div>
    );
}

export default CompanyCard;
