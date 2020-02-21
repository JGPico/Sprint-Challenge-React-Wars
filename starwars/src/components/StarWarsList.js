import React, {useState, useEffect} from "react";
import axios from "axios";
import {Container, Row} from "reactstrap";
import StarWarsCard from "./StarWarsCard";

export default function StarWarsList () {
    const [starWarsInfo, setStarWarsInfo] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/').then(response => {
            console.log("This is the star wars people api", response);
            setStarWarsInfo(response.data.results);

        }).catch(error => {
            console.log('This isnt going to work', error);
        })
    },[])
    
    return (
        <Container>
            <Row>
            {starWarsInfo.map((element, index) => (
                <StarWarsCard key = {index}
                name = {element.name}
                gender = {element.gender}
                homeworld = {element.homeworld}
                />
            ))}
            </Row>
        </Container>
    )
}
