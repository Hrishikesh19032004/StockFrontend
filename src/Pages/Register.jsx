import { useState } from "react";
import registrationImage from "../Images/registration.png";
import "../Styles/Register.css"
const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
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
        <section className="registration-page">
            <main>
                <div className="section-Registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-img">
                            <img src={registrationImage} width="600" height="500" alt="Registration" />
                        </div>

                        <div className="registration-form">
                            <h1 className="main-heading">Registration Form</h1>
                            <br />

                            <form action="" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        placeholder="Enter your username" 
                                        id="username" 
                                        autoComplete="off" 
                                        value={user.username} 
                                        onChange={handleInput} 
                                    />
                                </div>

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
                                    <label htmlFor="phone">Phone</label>
                                    <input 
                                        type="number" 
                                        name="phone" 
                                        placeholder="Enter your phone number" 
                                        id="phone" 
                                        autoComplete="off" 
                                        value={user.phone} 
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

                                <button type="submit" className="btn btn-submit">Register Now</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Register;
