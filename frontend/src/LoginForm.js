import { useState } from "react";
import { useHistory } from "react-router-dom";

const INITIAL_DATA = {
    username: "",
    password: "",
};
function LoginForm({ setCurrUser, JoblyApi, addUserToken, clearUserInfo }) {
    const history = useHistory();
    const [form, setForm] = useState(INITIAL_DATA);
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm((fData) => ({ ...fData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await JoblyApi.loginUser(form);

        clearUserInfo();
        if (token) {
            await addUserToken(form.username, token);
        }

        setCurrUser(form.username);
        return history.push("/");
    };
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="w-50"
                style={{ marginLeft: "25%" }}
            >
                <div class="mb-3">
                    <label for="username" class="form-label w-100 text-start">
                        Username
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="username"
                        name="username"
                        onChange={handleChange}
                    />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label w-100 text-start">
                        Password
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
}

export default LoginForm;
