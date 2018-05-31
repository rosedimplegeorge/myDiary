import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

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
            console.log('Rendering Recipes :', this.state.recipes.length)
            return <div key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}><h2>{recipe.name}</h2><p>{recipe.story}</p></Link>
                    </div>
                    if(this.state.error){
                        return<div>{this.state.error}</div>
                    }
        })
            console.log('Recipe List',RecipesList)
        return (
            <div>
                <h1>Recipe List</h1>
                <h4>{RecipesList}</h4>
            </div>
        );
    }
}

export default RecipesList;