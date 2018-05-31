import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SpecificRecipe extends Component {

    state = {
        recipe: {},
        showEditForm: false
    }

    handleChange = (event) => {
        const recipe = { ...this.state.recipe };
        recipe[event.target.name] = event.target.value;
        this.setState({ recipe });
      };
    
    componentDidMount = () => {
        this.getSpecificRecipe()
    }

    toggleShowEditForm = () => {
        console.log("Toggle -EDIT -Function is Called:")
        this.setState({ showEditForm: !this.state.showEditForm })
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

    editRecipe = (event)  => {
        event.preventDefault()
        const recipeId = this.state.recipe.id
        const payload = this.state.recipe
        console.log('Edit Recipe is Called')
        axios.put(`/api/recipes/${recipeId}`, payload)
        .then((res) => {
            console.log('edit user return: ', res.data)
            const recipe = res.data
            this.setState({recipe})
            this.toggleShowEditForm()
        })
        .catch(error => {
            console.log(error)
        })
    }



    render() {
        return (
            <div>
                <h1>SpecificRecipe</h1>
                <h4>{this.state.recipe.name}</h4>
                <h6>{this.state.recipe.story}</h6>
                <form onSubmit={this.editRecipe}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                    onChange={this.handleChange}
                    type="text"
                    name="name"
                    value={this.state.recipe.name}
                    />
                </div>
                <label htmlFor="name">Story: </label>
                    <input
                    onChange={this.handleChange}
                    type="text"
                    name="story"
                    value={this.state.recipe.story}
                    />
                <input type="submit" value="Update Recipe" />
                </form>
                <Link to='/'><Button bsStyle="info">Home</Button></Link>
            </div>
        );
    }
}

export default SpecificRecipe;