import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate(); // Hook para la navegación entre páginas

    // Estados para almacenar la información de personajes, planetas y vehículos
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    // Estado para almacenar los favoritos, recuperados del localStorage
    const [favorites, setFavorites] = useState(localStorage.getItem('favorites') === null ? [] : JSON.parse(localStorage.getItem('favorites')));

    // Efecto para obtener datos de la API al cargar el componente
    useEffect(() => {
        fetch("https://www.swapi.tech/api/people")
            .then(res => res.json())
            .then(data => {
                data.results.forEach((x) => {
                    console.log("Datos de personajes:", data);
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
                            console.log("vehicles data:", data)
                            setVehicles(prev => [...prev, { ...x, ...data_info.result }]);
                        });
                });
            })
            .catch(err => console.error(err));
    }, []);

    // Función para navegar a la página de detalles con los datos del item seleccionado
    const goToDetails = (item) => {
        navigate('/details', { state: { item: item } });
    }

    // Función para guardar un elemento en favoritos y almacenarlo en localStorage
    const saveFavorite = (info) => {
        const copy_favorites = [...favorites];
        const index = copy_favorites.findIndex(fav => fav.uid === info.uid);
        if (index === -1) {
            copy_favorites.push(info);
        } else {
            copy_favorites.splice(index, 1);
        }
        setFavorites(copy_favorites);
        localStorage.setItem('favorites', JSON.stringify(copy_favorites));
        window.dispatchEvent(new Event('storage'));
    };
    

    return (
        <div className="container">
            {/* Sección de Personajes */}
            <h1 className="text-danger mb-4 fs-4">Personajes</h1>
            <div className="scroll-container">
                {people.map((person) => (
                    <div className="card" key={person.uid}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${person._uid}.jpg`} className="card-img-top" alt={person.name} />
                        <div className="card-body text-center">
                            <p className="fs-3">{person.name}</p>
                            <p className="card-text"><strong>Género: </strong>{person.properties.gender}</p>
                            <p className="card-text"><strong>Color del Pelo: </strong>{person.properties.hair_color}</p>
                            <p className="card-text"><strong>Color de Ojos: </strong>{person.properties.eye_color}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-sm btn-outline-secondary m-3"
                                onClick={() => goToDetails(person)}>READ MORE!</button>
                            <button className="btn btn-sm btn-outline-secondary m-3" onClick={() => saveFavorite(person)}>
                                <i className="fa-solid fa-heart"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sección de Planetas */}
            <h1 className="text-danger mb-4 fs-4">Planetas</h1>
            <div className="scroll-container">
                {planets.map((planet) => (
                    <div className="card" key={planet.uid}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${planet.uid}.jpg`} className="card-img-top" alt={planet.name} />
                        <div className="card-body">
                            <p className="fs-3">{planet.name}</p>
                            <p className="card-text"><strong>Diámetro: </strong>{planet.properties.diameter}</p>
                            <p className="card-text"><strong>Gravedad: </strong>{planet.properties.gravity}</p>
                            <p className="card-text"><strong>Población: </strong>{planet.properties.population}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-sm btn-outline-secondary m-3"
                                onClick={() => goToDetails(planet)}>READ MORE!</button>
                            <button className="btn btn-sm btn-outline-secondary m-3" onClick={() => saveFavorite(planet)}>
                                <i className="fa-solid fa-heart"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sección de Vehículos */}
            <h1 className="text-danger mb-4 fs-4">Vehículos</h1>
            <div className="scroll-container">
                {vehicles.map((vehicle) => (
                    <div className="card" key={vehicle.uid}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${vehicle.uid}.jpg`} className="card-img-top" alt={vehicle.name} />
                        <div className="card-body">
                            <p className="fs-4">{vehicle.name}</p>
                            <p className="card-text"><strong>Modelo: </strong>{vehicle.properties.model}</p>
                            <p className="card-text"><strong>Pasajeros: </strong>{vehicle.properties.passengers}</p>
                            <p className="card-text"><strong>Capacidad de Carga: </strong>{vehicle.properties.cargo_capacity}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-sm btn-outline-secondary m-3"
                                onClick={() => goToDetails(vehicle)}>READ MORE!</button>
                            <button className="btn btn-sm btn-outline-secondary m-3" onClick={() => saveFavorite(vehicle)}>
                                <i className="fa-solid fa-heart"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
