import React, { useEffect, useState } from "react";
import axios from "axios";
import imgBit from "../assets/starwars.jpg";
import {
    Card, CardImg, CardBody,
    CardTitle, CardText, Col
  } from 'reactstrap';

const StarWarsCard = props => {
    const [homePlanet, setHomePlanet] = useState([]);

    useEffect(()=> {
        axios.get(props.homeworld).then(response => {
            console.log("What planet are you from", response)
            setHomePlanet(response.data);
        }).catch(error => {
            console.log("The destructive capacity to annihilate an entire planet", error)
        })
    },[])

    return (
        <Col xs='6' md='4' xl='3'>
            <Card body inverse color='primary'>
                <CardImg top width="100%" src={imgBit} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag ='h2'>Name: {props.name}</CardTitle>
                    <CardText tag ='h3'>Gender: {props.gender}</CardText>
                    <CardText tag ='h3'>HomeWorld: {homePlanet.name}</CardText>
                </CardBody>
            </Card>
      </Col>  
    );
};

export default StarWarsCard;