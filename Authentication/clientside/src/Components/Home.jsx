import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Home = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<NavLink className="navbar-brand" href="/">
						Navbar
					</NavLink>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
                                <NavLink to={"/login"} className="nav-link active" aria-current="page">Login</NavLink>
							</li>
                            <li className="nav-item">
                                <NavLink to={"/signup"} className="nav-link active" aria-current="page">Signup</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Home;
