import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);

    // Cargar favoritos desde localStorage al iniciar
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
        //Escuchar cambios en localStorage
        const handleStorageChange = () => {
            const updatedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
            setFavorites(updatedFavorites);
        };
        window.addEventListener('storage', handleStorageChange);
        // Limpieza del listener
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    // Guardar en localStorage cuando cambian los favoritos
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const removeFavorite = (uid) => {
        const updatedFavorites = favorites.filter((fav) => fav.uid !== uid);
        setFavorites(updatedFavorites);
    };

    return (
        <div className="container">
            <nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-between align-items-center">
                <Link to="/">
                    <img
                        src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
                        className="m-2"
                        style={{ maxWidth: "100px" }}
                    />
                </Link>

                {/* Botón Favoritos */}
                <div className="dropdown">
                    <button
                        className="btn btn-warning dropdown-toggle position-relative"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fa-solid fa-heart"></i> Favoritos
                        {favorites.length > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {favorites.length}
                            </span>
                        )}
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end" style={{ right: 0, minWidth: "200px" }}>
                        {favorites.length === 0 ? (
                            <li className="dropdown-item text-muted">No hay favoritos</li>
                        ) : (
                            favorites.map((fav) => (
                                <li key={fav.uid} className="dropdown-item d-flex justify-content-between align-items-center">
                                    {fav.name}
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => removeFavorite(fav.uid)}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </li>
                            ))
                        )}
                        {favorites.length > 0 && (
                            <li>
                                <button
                                    className="dropdown-item text-center text-primary"
                                    onClick={() => navigate("/favorites")}
                                >
                                    Ver todos
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
};
