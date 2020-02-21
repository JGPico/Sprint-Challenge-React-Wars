import React from "react";
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';

const StarWarsCard = ({name, gender}) => {
    return (
        <Col xs='6' md='4' xl='3'>
            <Card>
                <CardImg top width="100%" src="/assets/starwars.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Name: {name}</CardTitle>
                    <CardSubtitle>Gender: {gender}</CardSubtitle>
                </CardBody>
            </Card>
      </Col>  
    );
};

export default StarWarsCard;