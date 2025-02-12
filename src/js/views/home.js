import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people")
            .then(res => res.json())
            .then(data => {
                data.results.forEach((x) => {
                    fetch(x.url)
                        .then(res_info => res_info.json())
                        .then(data_info => {
                            setPeople(prev => [...prev, { ...x, ...data_info.result }]);
                        });
                });
            })
            .catch(err => console.error(err));

        fetch("https://www.swapi.tech/api/planets")
            .then(res => res.json())
            .then(data => {
                data.results.forEach((x) => {
                    fetch(x.url)
                        .then(res_info => res_info.json())
                        .then(data_info => {
                            setPlanets(prev => [...prev, { ...x, ...data_info.result }]);
                        });
                });
            })
            .catch(err => console.error(err));

        fetch("https://www.swapi.tech/api/vehicles")
            .then(res => res.json())
            .then(data => {
                data.results.forEach((x) => {
                    fetch(x.url)
                        .then(res_info => res_info.json())
                        .then(data_info => {
                            setVehicles(prev => [...prev, { ...x, ...data_info.result }]);
                        });
                });
            })
            .catch(err => console.error(err));
    }, []);

    // Función para navegar a la página de detalles
    const goToDetails = (item) => {
        navigate('/details', { state: { item } });
    }

    return (
        <div className="container">
            {/* Sección de Personajes */}
            <h1 className="text-danger mb-4 fs-4">Personajes</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pb-5">
                {people.map((person) => (
                    <div className="col" key={person.uid}>
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <p className="fs-3">{person.name}</p>
                                <p className="card-text"><strong>Género: </strong>{person.properties.gender}</p>
                                <p className="card-text"><strong>Color del Pelo: </strong>{person.properties.hair_color}</p>
                                <p className="card-text"><strong>Color de Ojos: </strong>{person.properties.eye_color}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-sm btn-outline-secondary m-3"
                                    onClick={() => goToDetails(person)}>READ MORE!</button>
                                <button className="btn btn-sm btn-outline-secondary m-3">
                                    <i className="fa-solid fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sección de Planetas */}
            <h1 className="text-danger mb-4 fs-4">Planetas</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pb-5">
                {planets.map((planet) => (
                    <div className="col" key={planet.uid}>
                        <div className="card shadow-sm text-center">
                            <div className="card-body">
                                <p className="fs-3">{planet.name}</p>
                                <p className="card-text"><strong>Diámetro: </strong>{planet.properties.diameter}</p>
                                <p className="card-text"><strong>Gravedad: </strong>{planet.properties.gravity}</p>
                                <p className="card-text"><strong>Población: </strong>{planet.properties.population}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-sm btn-outline-secondary m-3"
                                    onClick={() => goToDetails(planet)}>READ MORE!</button>
                                <button className="btn btn-sm btn-outline-secondary m-3">
                                    <i className="fa-solid fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sección de Vehículos */}
            <h1 className="text-danger mb-4 fs-4">Vehículos</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pb-5">
                {vehicles.map((vehicle) => (
                    <div className="col" key={vehicle.uid}>
                        <div className="card shadow-sm text-center">
                            <div className="card-body">
                                <p className="fs-4">{vehicle.name}</p>
                                <p className="card-text"><strong>Modelo: </strong>{vehicle.properties.model}</p>
                                <p className="card-text"><strong>Pasajeros: </strong>{vehicle.properties.passengers}</p>
                                <p className="card-text"><strong>Capacidad de Carga: </strong>{vehicle.properties.cargo_capacity}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-sm btn-outline-secondary m-3"
                                    onClick={() => goToDetails(vehicle)}>READ MORE!</button>
                                <button className="btn btn-sm btn-outline-secondary m-3">
                                    <i className="fa-solid fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
