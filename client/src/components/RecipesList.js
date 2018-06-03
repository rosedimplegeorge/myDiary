import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Accordion } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import ButtonStyle from './styledComponents/ButtonStyle'

class RecipesList extends Component {

    state = {
        recipes: [],
        showNewForm: false,
        newRecipe: {
            name: '',
            story: ''
        }
    }

    componentDidMount() {
        this.getAllRecipes()
    }

    getAllRecipes = () => {
        console.log('getAllRecipes called:')
        axios.get('/api/recipes')
            .then(res => {
                console.log('Saving Recipes to state:', res.data)
                this.setState({ recipes: res.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    deleteRecipe = (id) => {
        console.log("Delete Recipe fi=unction is called :")
        axios.delete(`/api/recipes/${id}`)
            .then((response) => {
                console.log(response)
                this.getAllRecipes()
            })
    }

    toggleShowNewForm = () => {
        console.log("Toggle Function is Called:")
        this.setState({ showNewForm: !this.state.showNewForm })
    }

    handleChange = (event) => {
        const name = event.target.name
        const newRecipe = { ...this.state.newRecipe }
        newRecipe[name] = event.target.value
        this.setState({ newRecipe })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const transferdata = {
            name: this.state.newRecipe.name,
            story: this.state.newRecipe.story
        }
        console.log("From submit function transferdata: ", transferdata)
        axios.post(`/api/recipes`, transferdata)
        .then((res) => {
            console.log('From Server', res.data)
            const recipes = [...this.state.recipes]
            recipes.push(res.data)
            this.setState({ recipes })
        }).then(() => {
            this.toggleShowNewForm()
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
                    <Button bsStyle="danger" onClick={() => { this.deleteRecipe(recipe.id) }}>Delete</Button>
                </Accordion>
            </div>
        })


        return (
            <div>
                <Jumbotron>
                <ButtonStyle>
                <h1>Recipe List</h1>
                <Link to='/'><Button bsStyle="info">Home</Button></Link>
                </ButtonStyle>
                </Jumbotron>
                
               
                <Button bsStyle="success" onClick={this.toggleShowNewForm}>Add New Recipe</Button>

                {this.state.showNewForm ?
                    (<form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input onChange={this.handleChange} type="text" name="name" />
                        </div>
                        <div>
                            <label htmlFor="story ">Story: </label>
                            <input onChange={this.handleChange} type="text" name="story" />
                        </div>
                        <button>Submit</button>
                    </form>)
                    : null}
                 <h4>{RecipesList}</h4>       
            </div>
        );
    }
}

export default RecipesList;