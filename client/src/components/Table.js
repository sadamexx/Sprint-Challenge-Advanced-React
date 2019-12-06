import React from 'react';
import { Table } from 'reactstrap';

const PlayersTable = (props) => {
  return (
    <Table hover>
        
      <tbody>
        <tr>
        
          <td>{props.name}</td>
          <td>{props.country}</td>
          <td>{props.searches}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default PlayersTable;