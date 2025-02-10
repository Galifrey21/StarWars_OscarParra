import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import imagen from "../../img/jude.jpeg"


const apiUrl = "https://www.swapi.tech/api"


useEffect(() => {
    fetch(apiUrl + "/planets/")
        .then(response => response.json()) // Convertir respuesta a JSON
        .then(data => {
            console.log("Datos recibidos:", data); // 🔹 Ver qué devuelve la API
            setData(data.results); // 🔹 Guardar solo los planetas (results)
        })
        .catch(error => console.error("Error al obtener datos:", error));
}, []); // 🔹 Se ejecuta solo una vez al montar el componente




export const Details = () => {
    return (
        <div className="container">
            <div className="row row-cols-12">
                <div className="card mb-3 border border-0" style={{ maxWidth: "100%" }}>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={imagen} className="img-fluid rounded-start" alt="..." style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body ">
                                <h5 className="card-title text-center fs-1">Card title</h5>
                                <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ border: "3px solid red", width: "100%" }} />
            <div className="row row-cols-12 text-danger text-center">
                <div className="col-md-2">
                    <p className="fs-3">asdasdas</p>
                    <p>asdasdas</p>
                    <p>asdasdasas</p>
                </div>
                <div className="col-md-2">
                    <p className="fs-3">asdasdasdas</p>
                    <p>asdasdasdas</p>
                    <p>asdasdasd</p>
                </div>
                <div className="col-md-2">
                    <p className="fs-3">asdasdasdasd</p>
                    <p>sadasdas</p>
                    <p>sdasdsadas</p>
                </div>
                <div className="col-md-2">
                    <p className="fs-3">sadasdasd</p>
                    <p>asdasdasd</p>
                    <p>asdasdasd</p>
                </div>
                <div className="col-md-2">
                    <p className="fs-3">adsasdasd</p>
                    <p>asdsadas</p>
                    <p>asdasdas</p>
                </div>
                <div className="col-md-2">
                    <p className="fs-3">asdasdasda</p>
                    <p>asdasdasda</p>
                    <p>adsasdasdasd</p>
                </div>
            </div>
        </div>
    )
}
