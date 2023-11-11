import { useState } from "react";

function SearchForm({ sendTerm, searchTerm }) {
    const INITIAL_DATA = {
        [searchTerm]: "",
    };

    const [form, setForm] = useState(INITIAL_DATA);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm((fData) => ({ ...fData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm(INITIAL_DATA);
        sendTerm(form);
    };
    console.log(searchTerm);

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="row g-3 justify-content-center"
            >
                <div className="col-auto">
                    <input
                        name={searchTerm}
                        type="text"
                        className="form-control"
                        id="inputPassword2"
                        placeholder="Enter a company..."
                        onChange={handleChange}
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export default SearchForm;
