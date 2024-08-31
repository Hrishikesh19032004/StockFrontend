import { useState } from "react";
import registrationImage from "../Images/registration.png";
import "../Styles/Login.css"
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;  // Corrected typo here

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };
            
    return (
        <section className="login-page">
            <main>
                <div className="section-Login">
                    <div className="container grid grid-two-cols">
                        <div className="login-img">
                            <img src={registrationImage} width="600" height="500" alt="Login" />
                        </div>

                        <div className="login-form">
                            <h1 className="main-heading">Login Form</h1>
                            <br />

                            <form action="" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Enter your email" 
                                        id="email" 
                                        autoComplete="off" 
                                        value={user.email} 
                                        onChange={handleInput} 
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="Enter your password" 
                                        id="password" 
                                        autoComplete="off" 
                                        value={user.password} 
                                        onChange={handleInput} 
                                    />
                                </div>

                                <br />

                                <button type="submit" className="btn btn-submit">Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Login;
