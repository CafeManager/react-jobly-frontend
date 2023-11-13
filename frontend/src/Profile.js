import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const INITIAL_DATA = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
};
function Profile({ JoblyApi, username }) {

    const [form, setForm] = useState(INITIAL_DATA);
    const { id } = useParams();

    const history = useHistory();
    useEffect(() => {
        async function retrieveData() {
            const userData = await JoblyApi.getUserData(username);
            if (userData && userData.username == id) {
                setForm({
                    username: userData.username,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                });
            } else {
                return history.push("/");
            }
        }
        retrieveData();
    }, [username, JoblyApi, history, id]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((fData) => {
            delete fData.username;
            return { ...fData, [name]: value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await JoblyApi.editAccount(form, username);

        return history.push("/");
    };
    return (
        <>
            <h1> {username}'s Profile </h1>
            <form
                className="w-50"
                onSubmit={handleSubmit}
                style={{ marginLeft: "25%" }}
            >
                <div class="mb-3">
                    <label
                        for="username"
                        className="form-label w-100 text-start"
                    >
                        Username
                    </label>
                    <input
                        disabled
                        type="text"
                        onChange={handleChange}
                        className="form-control"
                        id="username"
                        name="username"
                        value={form.username}
                    />
                </div>

                <div class="mb-3">
                    <label for="firstname" class="form-label w-100 text-start">
                        First Name
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        class="form-control"
                        id="firstname"
                        name="firstName"
                        value={form.firstName}
                    />
                </div>
                <div class="mb-3">
                    <label for="lastname" class="form-label w-100 text-start">
                        Last Name
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        class="form-control"
                        id="lastname"
                        name="lastName"
                        value={form.lastName}
                    />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label w-100 text-start">
                        Email
                    </label>
                    <input
                        type="email"
                        onChange={handleChange}
                        class="form-control"
                        id="email"
                        name="email"
                        value={form.email}
                    />
                </div>

                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
}

export default Profile;
