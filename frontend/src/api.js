import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
    // the token for interactive with the API will be stored here.
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        //there are multiple ways to pass an authorization token, this is how you pass it in the header.
        //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${JoblyApi.token}` };
        const params = method === "get" ? data : {};
        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API routes

    /** Get details on a company by handle. */

    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        console.log(res);
        return res.company;
    }

    static async getCompanies(params = {}) {
        console.log(params);
        let res = await this.request(`companies/`, params);
        console.log(res);
        return res.companies;
    }

    static async getJobs(params = {}) {
        console.log(params);
        let res = await this.request(`jobs/`, params);
        console.log(res);
        return res.jobs;
    }

    static async registerAccount(body) {
        let res = await this.request(`auth/register`, body, "POST");
        return res.token;
    }

    static async editAccount(body, username) {
        let res = await this.request(`users/${username}`, body, "PATCH");
        return res.token;
    }

    static async loginUser(body) {
        let res = await this.request(`auth/token`, body, "POST");
        return res.token;
    }

    static async getUserData(user) {
        let res = await this.request(`users/${user}`);
        return res.user;
    }

    static async applyToJob(username, jobId) {
        console.log(this.token);
        let res = await this.request(
            `users/${username}/jobs/${jobId}`,
            {},
            "POST"
        );
        console.log(res);

        return res.user;
    }

    static async setToken(token) {
        JoblyApi.token = token;
    }

    static async clearToken() {
        JoblyApi.token = "";
    }
}

JoblyApi.token = localStorage.getItem("joblyToken");

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
