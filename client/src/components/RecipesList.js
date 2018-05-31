import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Accordion } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class RecipesList extends Component {

    state = {
        recipes:[]
    }

    componentDidMount(){
        this.getAllRecipes()
    }

    getAllRecipes = () =>{
        console.log('getAllRecipes called:')
        axios.get('/api/recipes')
        .then(res => {
            console.log('Saving Recipes to state:', res.data)
            this.setState({recipes: res.data})
        })
        .catch(error =>{
            console.log(error)
        })
    }


    render() {

        const RecipesList = this.state.recipes.map(recipe => {
            return <div key={recipe.id}>
                    <Accordion>
                        <Panel header={recipe.name}>
                        <Link to={`/recipes/${recipe.id}`}><h4>{recipe.name}</h4></Link>
                        </Panel>
                        <p>{recipe.story}</p>
                        <Button bsStyle="danger">Delete</Button>
                    </Accordion>
                    </div>
        })



        return (
            <div>
                <h1>Recipe List</h1>
                <h4>{RecipesList}</h4>
                <Link to='/'><Button bsStyle="info">Home</Button></Link>
            </div>
        );
    }
}

export default RecipesList;