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

      handleSubmit = (event) => {
        event.preventDefault()
        const transferdata = {
            name: this.state.recipe.name,
            story: this.state.recipe.story
        }
        console.log("From submit function transferdata: ", transferdata)
        axios.put(`/api/recipes/${this.state.recipe.id}`, transferdata)
        .then((res) => {
            console.log('From Server', res.data)
            const recipe = {...this.state.recipe}
            this.setState({ recipe })
        }).then(() => {
            this.toggleShowEditForm()
        })
        
    }

    
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
                <Link to='/'><Button bsStyle="info">Home</Button></Link>
                <Link to={`/recipes/${this.state.recipe.id}/procedures`}><Button bsStyle="info">Click to see how to make it</Button></Link>
                <Button bsStyle="success" onClick={this.toggleShowEditForm}>Update Recipe</Button>
                {this.state.showEditForm ?
                    (<form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input onChange={this.handleChange} type="text" name="name" value={this.state.recipe.name}/>
                        </div>
                        <div>
                            <label htmlFor="story ">Story: </label>
                            <input onChange={this.handleChange} type="text" name="story" value={this.state.recipe.story}/>
                        </div>
                        <button>Submit</button>
                    </form>)
                    : null}
                
            </div>
        );
    }
}

export default SpecificRecipe;