import React, { Component } from 'react';
import WeatherStyle from './styledComponents/WeatherStyle'
import axios from 'axios'

class WeatherComponent extends Component {

    state = {

        savedTemp: ''

    }

    componentDidMount(){
        axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%2012770723&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
             .then((response) => {
                 console.log('Response data:', response)
               const savedTemp = response.data.query.results.channel.item.condition.temp;
               this.setState({savedTemp: savedTemp});
             })
             .catch((error) => {
               console.error("Error: ", error);
             });
      }
    
  

    render(){
        return(
            <div>
                    <WeatherStyle>
                        <h6>Current Temperature:{this.state.savedTemp} F</h6>
                    </WeatherStyle>
            </div>
        )
    }
}

export default WeatherComponent