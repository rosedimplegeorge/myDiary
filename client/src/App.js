import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Image } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <h1>My Diary</h1>
            <p>
              <Button bsStyle="primary">Recipes</Button>
            </p>
        </Jumbotron>
        <Image src="https://i.imgur.com/xo1P2k0.jpg" responsive />
      </div>
    );
  }
}

export default App;
