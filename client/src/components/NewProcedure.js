import React, { Component } from 'react';
import axios from 'axios'

class NewProcedure extends Component {
    state = {
        NewProcedure: {
            title: '',
            description: '',
            photo_url: ''
        }
    }
    handleChange = (event) => {
        const name = event.target.name
        const newProcedure = { ...this.state.newProcedure }
        newProcedure[name] = event.target.value
        this.setState({ newProcedure })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const transferdata = {
            title: this.state.newProcedure.title,
            description: this.state.newProcedure.description,
            photo_url: this.state.newProcedure.photo_url,
            recipe_id: this.props.recipeId
        }

        console.log("From submit function transferdata: ", transferdata)
        await axios.post(`/api/recipes/${this.props.recipeId}/procedures/`, transferdata);
        this.props.toggleShowNewProcedureForm()
        this.props.getProcedureAndCommentData(this.props.recipeId)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input onChange={this.handleChange} type="text" name="title" />
                    </div>
                    <div>
                        <label htmlFor="description ">Description: </label>
                        <input onChange={this.handleChange} type="text" name="description" />
                    </div>
                    <div>
                        <label htmlFor="photo_url">Photo_url: </label>
                        <input onChange={this.handleChange} type="text" name="photo_url" />
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NewProcedure;