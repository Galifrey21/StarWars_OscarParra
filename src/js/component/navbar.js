import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container">
			<nav className="navbar navbar-light bg-light mb-3">
				<div className="bg-black">
					<Link to="/">
						<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" className="m-2" style={{ maxWidth: "100px" }} />
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Favoritos</button>
					</Link>
				</div>
			</nav>
		</div>
	);
};
