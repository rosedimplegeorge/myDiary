import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

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
        <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
