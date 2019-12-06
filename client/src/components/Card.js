import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Col, 
} from 'reactstrap';

const PlayersCard = (props) => {
  return (
   
      <Col xs="12" s="6" md="4">
          <Card className="card-main">
            <CardImg top width="100%" src={props.randomCardImage} alt="women soccer" />
            <CardBody>
              <CardTitle className="card-name">{props.name}</CardTitle>
              <CardSubtitle>Country: {props.country}</CardSubtitle>
              <CardSubtitle># of searches: {props.searches}</CardSubtitle>
            </CardBody>
          </Card>
        
      </Col>
   
    
  );
}

export default PlayersCard;