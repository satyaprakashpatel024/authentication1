import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
	const [input, setInput] = useState({
		firstName: "",
		lastName: "",
		email: "",
		passWord: "",
	});

	const fun1 = (e) => {
		let { name, value } = e.target;
		setInput({ ...input, [name]: value });
		// console.log(name, ":", value);
	};

	// fetch('http://localhost:4000/signup')
	// .then(function (response) {
	// 	return response.json();
	// });

	const handleSubmit = async (e)=>{
		e.preventDefault();
		const response = await axios.post("http://localhost:4000/signup", input);
        console.log(response.data);
	}

	return (
		<div className="parent">
			<form onSubmit={handleSubmit}>
				<div className="container1">
					<header className="header">
						<span className="text">SignUp form</span>
					</header>
					<section className="inputs">
						<section className="input">
							<img src={user_icon} alt="img" />
							<input type="text" name="firstName" value={input.firstName} onChange={fun1} placeholder="firstName" />
						</section>
						<section className="input">
							<img src={user_icon} alt="img" />
							<input type="text" name="lastName" value={input.lastName} onChange={fun1} placeholder="lastName" />
						</section>
						<section className="input">
							<img src={email_icon} alt="img" />
							<input type="email" name="email" value={input.email} onChange={fun1} placeholder="Email" />
						</section>
						<section className="input">
							<img src={password_icon} alt="img" />
							<input type="passWord" name="passWord" value={input.passWord} onChange={fun1} placeholder="Password" />
						</section>
					</section>
					<div className="submit-container">
						<button className="submit"  type='submit'>Submit</button>
						<Link to={"/login"} className="loginlink">
                            <span className="submit">Login</span>
                        </Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Signup;
