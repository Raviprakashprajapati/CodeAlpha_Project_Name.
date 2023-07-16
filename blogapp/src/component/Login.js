import React from "react";
import "./Login.css"

const Login = () => {
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleSubmit = () => {
        if (name.length < 3 || password.length < 3) {
            setError("Empty details");
        } else {
            setError("");
            alert("Succesfull login");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center ">
                <div className="col-12">
                    <div className="bg-dark p-5 text-white" >
                        <h1>Login Page</h1>
                        <form onSubmit={handleSubmit}>
                            <label for="name">Name:</label>
                            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <label for="password">Password:</label>
                            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <p style={{ color: "red", margin: "5px 0" }}>{error}</p>
                            <input type="submit" value="SUBMIT" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
