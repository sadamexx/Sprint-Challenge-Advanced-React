import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Col, Row
} from 'reactstrap';

const PlayersCard = (props) => {
  return (
   
      <Col xs="12" s="6" md="4">
          <Card className="card-main">
            <CardImg top width="100%" src="https://images.unsplash.com/photo-1542680283-b96aadf08a09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="women soccer" />
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