import { useState } from "react";

const INITIAL_DATA = {
    username: "",
    password: "",
};
function LoginForm() {
    const [form, setForm] = useState(INITIAL_DATA);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((fData) => ({ ...fData, [name]: value }));
    };

    const handleSubmit = (e) => {
        const [name, value] = e.target;
        setForm({ ...INITIAL_DATA, [name]: value });
    };
    return <h1> login </h1>;
}

export default LoginForm;
