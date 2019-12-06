import React from "react";
import PlayersCard from "./Card";
import { Container, Row } from 'reactstrap';
export default function Players(props) {

    return(
        <Container>
             <Row>
            {props.players.map((woman, index) => (
                <PlayersCard
                    key={index}
                    name={woman.name}
                    country={woman.country}
                    searches={woman.searches}
                    id={woman.id}
                />
            ))};
            </Row>
        </Container>
    );
}