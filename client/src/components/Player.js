import React from "react";
import PlayersTable from "./Table";

export default function Player(props) {

    return(
        <div>
            {props.players.map((woman, index) => (
                <PlayersTable 
                    key={index}
                    name={woman.name}
                    country={woman.country}
                    searches={woman.searches}
                    id={woman.id}
                />
            ))};
        </div>
    );
}