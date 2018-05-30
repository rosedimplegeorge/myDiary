import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Calendar from 'react-calendar';
import AppTitle from './components/styledComponents/AppTitle';
//import CalendarStyle from './components/styledComponents/CalendarStyle';


class App extends Component {

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
        <Jumbotron>
          <AppTitle>
            <h1>My Diary</h1>
            <p>
              <Button bsStyle="primary">Recipes</Button>
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
      </div>
    );
  }
}

export default App;
