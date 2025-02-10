import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	return (
		<div className="container">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
				<h1 className="text-danger mb-4">Personajes</h1>
			</div>
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pb-5">
				<div className="col">
					<div className="card shadow-sm">
						<svg className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Marcador de posición: Miniatura" focusable="false" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
							<title>Marcador de posición</title>
							<rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Miniatura</text>
						</svg>
						<div className="card-body">
							<p className="card-text">Esta es una tarjeta más amplia con texto de respaldo a continuación como
								introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
							<div className="d-flex justify-content-between">
								<div className="btn-group ">
									<button type="button" className="btn btn-sm btn-outline-secondary">READ MORE!</button>
								</div>
								<div className="btn-group ">
									<button type="button" className="btn btn-sm btn-outline-secondary"><i className="fa-solid fa-heart"></i></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
				<h1 className="text-danger mb-4">vehiculos</h1>
			</div>
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pb-5">
				<div className="col">
					<div className="card shadow-sm">
						<svg className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Marcador de posición: Miniatura" focusable="false" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
							<title>Marcador de posición</title>
							<rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Miniatura</text>
						</svg>
						<div className="card-body">
							<p className="card-text">Esta es una tarjeta más amplia con texto de respaldo a continuación como
								introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
							<div className="d-flex justify-content-between">
								<div className="btn-group ">
									<button type="button" className="btn btn-sm btn-outline-secondary">READ MORE!</button>
								</div>
								<div className="btn-group ">
									<button type="button" className="btn btn-sm btn-outline-secondary"><i className="fa-solid fa-heart"></i></button>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
				<h1 className="text-danger mb-4">planetas</h1>
			</div>
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pb-5">
				<div className="col">
					<div className="card shadow-sm">
						<svg className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Marcador de posición: Miniatura" focusable="false" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
							<title>Marcador de posición</title>
							<rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Miniatura</text>
						</svg>
						<div className="card-body">
							<p className="card-text">Esta es una tarjeta más amplia con texto de respaldo a continuación como
								introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
							<div className="d-flex justify-content-between">
								<div className="btn-group ">
									<button type="button" className="btn btn-sm btn-outline-secondary">READ MORE!</button>
								</div>
								<div className="btn-group ">
									<button type="button" className="btn btn-sm btn-outline-secondary"><i className="fa-solid fa-heart"></i></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


