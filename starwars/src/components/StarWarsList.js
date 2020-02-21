import React, {useState, useEffect} from "react";
import axios from "axios";

export default function StarWarsList () {
    const [starWarsInfo, setStarWarsInfo] = useState([]);

    useEffect(() => {
        axios.get('http https://swapi.co/api/people/1/').then(response => {
            console.log("This is the star wars people api", response);
        }).catch(error => {
            console.log('This isnt going to work', error);
        })
    },[])
    
    return (
        <div>

        </div>
    )
}