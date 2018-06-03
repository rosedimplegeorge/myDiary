import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Grid, Row} from 'react-bootstrap';
import WeatherStyle from './styledComponents/WeatherStyle'

class Weather extends Component {
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