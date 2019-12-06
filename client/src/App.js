import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Table } from 'reactstrap';
import Players from "./components/Player";




class App extends Component {
  state = {
    players: [],
  };



  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(response => {
      (console.log('player list', response))
      this.setState({players: response.data});
    })//ends then
    .catch(err => console.log('my error', err))
  };//ends componentDidMount







  render() {
    return (
      <div className="App">
        <Table hover>
            <thead>
              <tr>
                <th>Player Name</th>
                <th>Country</th>
                <th># of Searches</th>
              </tr>
            </thead>
        </Table>
        <Players players={this.state.players}/>
      </div>
    );//ends return
  }//ends render
}//ends App component

export default App;
