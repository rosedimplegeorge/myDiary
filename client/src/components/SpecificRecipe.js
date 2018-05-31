import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SpecificRecipe extends Component {
    render() {
        return (
            <div>
                <h1>SpecificRecipe</h1>
                <Link to='/'><Button bsStyle="info">Home</Button></Link>
            </div>
        );
    }
}

export default SpecificRecipe;