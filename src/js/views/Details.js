import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/home.css";

export const Details = () => {
    const location = useLocation();
    const item = location.state?.item; // Recibir el item pasado desde Home

    if (!item) {
        return <p className="text-center mt-5">No se encontró información.</p>;
    }

    // Propiedades según tipo de item
    const selectedPropertiesCharacter = ["height", "mass", "hair_color", "skin_color", "eye_color", "birth_year"];
    const selectedPropertiesPlanet = ["diameter", "rotation_period", "orbital_period", "gravity", "population", "climate"];
    const selectedPropertiesVehicle = ["model", "vehicle_class", "manufacturer", "cost_in_credits", "length", "crew"];

    // Depuración: Mostrar el objeto item completo
    console.log("Item recibido:", item);
    
    // Verificar el tipo de ítem según la descripción
    let selectedProperties = [];
    if (item.description === "A person within the Star Wars universe") {
        console.log("Es un personaje"); // Depuración
        selectedProperties = selectedPropertiesCharacter;
    } else if (item.description === "A planet.") {
        console.log("Es un planeta"); // Depuración
        selectedProperties = selectedPropertiesPlanet;
    } else if (item.description === "A vehicle") {
        console.log("Es un vehículo"); // Depuración
        selectedProperties = selectedPropertiesVehicle;
    }

    // Depuración: Verificar las propiedades seleccionadas
    console.log("Propiedades seleccionadas:", selectedProperties);

    return (
        <div className="container">
            <div className="row">
                <div className="card mb-3 border-0" style={{ maxWidth: "100%" }}>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img 
                                src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} 
                                className="img-fluid rounded-start" 
                                alt={item.name} 
                                style={{ height: "100%", width: "100%", objectFit: "cover" }} 
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title text-center fs-1">{item.name}</h5>
                                <p className="card-text text-center">
                                    {item.description || "No hay descripción disponible."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ border: "3px solid red", width: "100%" }} />
            <div className="row text-danger text-center">
                {selectedProperties.map((key, index) => (
                    <div className="col-md-2" key={index}>
                        <p className="fs-3">{key.replace("_", " ").toUpperCase()}</p>
                        {/* Depuración: Mostrar los valores de las propiedades */}
                        <p>{item.properties[key] || "No disponible"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
