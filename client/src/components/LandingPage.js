import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import AppTitle from './styledComponents/AppTitle'; 
import WeatherComponent from './WeatherComponent';
import DivStyle from './styledComponents/DivStyle'

class LandingPage extends Component {

  state = {
    date: new Date(),
    calendarOpen: false
  }
  onChange = date => this.setState({ date })

  toggleCalendar = () => {
    this.setState({calendarOpen: !this.state.calendarOpen})
  } 
  render() {
    
    return (
      <div>
        <DivStyle>
        <Jumbotron>
          <AppTitle>
            <h1>My Diary</h1>
            <WeatherComponent />
            <p>
              <Link to="/recipes"><Button bsStyle="primary">Recipes</Button></Link>
              <Button bsStyle="primary" onClick={this.toggleCalendar}>Calendar</Button>
              {this.state.calendarOpen ? (
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />) :null
              }
            </p>
          </AppTitle>
        </Jumbotron>
        <Image src="https://i.imgur.com/xo1P2k0.jpg" responsive />
      </DivStyle>
      </div>
    );
  }
}

export default LandingPage;
