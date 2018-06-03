import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Jumbotron } from 'react-bootstrap';
import ButtonStyle from './styledComponents/ButtonStyle';
import DivStyle from './styledComponents/DivStyle';

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


    render() {
        return (
            <div>
                <DivStyle>
                <Jumbotron>
                <ButtonStyle>
                <h1>Story behind this Specific Recipe !</h1>
                    <Link to='/'><Button bsStyle="info">Home</Button></Link>
                </ButtonStyle>
                </Jumbotron>
                <h4>{this.state.recipe.name}</h4>
                <h6>{this.state.recipe.story}</h6>
                <ButtonStyle>
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
                 </ButtonStyle>  
                 <ButtonStyle> 
                <Link to={`/recipes/${this.state.recipe.id}/procedures`}><Button bsStyle="info">Click to see how to make it</Button></Link>
                </ButtonStyle>
                </DivStyle>
            </div>
        );
    }
}

export default SpecificRecipe;