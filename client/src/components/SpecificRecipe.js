import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SpecificRecipe extends Component {

    state = {
        recipe: {}
    }
    
    componentDidMount = () => {
        this.getSpecificRecipe()
    }

    getSpecificRecipe = () => {
        console.log('Get Specific user is Called :')
        const recipeId = this.props.match.params.id
        console.log('Recipe ID: ', recipeId)
        axios.get(`/api/recipes/${recipeId}`)
        .then((res) => {
            console.log('From server: ', res.data)
            this.setState({recipe: res.data})
        })
    }

    render() {
        return (
            <div>
                <h1>SpecificRecipe</h1>
                <h4>{this.state.recipe.name}</h4>
                <h6>{this.state.recipe.story}</h6>

                <Link to='/'><Button bsStyle="info">Home</Button></Link>
            </div>
        );
    }
}

export default SpecificRecipe;