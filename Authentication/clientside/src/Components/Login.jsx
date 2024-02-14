import React, { useState } from "react";
import { Link } from "react-router-dom";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import "./Login.css";

const Login = () => {
	const [input, setInput] = useState({
		email: "",
		passWord: "",
	});

	const fun1 = (e) => {
		let { name, value } = e.target;
		setInput({ ...input, [name]: value });
		console.log(input);
	};

	fetch('http://localhost:4000/login')
	.then(function (response) {
		return response.json();
	});

	return (
		<div className="parent1">
			<form action="/login" method="post">
				<div className="container2">
					<header className="header1">
						<span className="text1">Login form</span>
					</header>
					<section className="inputs1">
						<section className="input1">
							<img src={email_icon} alt="img" />
							<input type="text" name="email" value={input.userName} onChange={fun1} placeholder="User email" />
						</section>
						<section className="input1">
							<img src={password_icon} alt="img" />
							<input type="passWord" name="passWord" value={input.passWord} onChange={fun1} placeholder="Password" />
						</section>
					</section>
					<section className="submit-container1">
						<button className="submit1">Submit</button>
						<Link to={"/signup"} className="signuplink1">
							<span className="submit1">Sign Up</span>
						</Link>
					</section>
				</div>
			</form>
		</div>
	);
};

export default Login;
