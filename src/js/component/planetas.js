import React from "react";
import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const apiUrl = "https://www.swapi.tech/api/"

const planetas = () =>{
    fetch(apiUrl+"planets/:id",){
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))

    }
}