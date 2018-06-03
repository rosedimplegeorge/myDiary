import React, { Component } from 'react';
import { Row} from 'react-bootstrap';
import WeatherStyle from './styledComponents/WeatherStyle'
import axios from 'axios'

class Weather extends Component {

    state = {

        currentWeather: ''

    }

    componentDidMount(){
        

        
    
    }

    
  

    render(){
        return(
            <div>
                <Row className="showGrid" id="tempRow">
                    <WeatherStyle>
                        <label class="bigText">89 F</label>
                    </WeatherStyle>
                </Row>
            </div>
        )
    }
}

export default Weather