import React, { Component } from 'react';
import axios from 'axios'

class NewComment extends Component {

    state = {
        newComment: {
            reviewer_name: '',
            review: ''
        }
    }
    handleChange = (event) => {
        const name = event.target.name
        const newComment = { ...this.state.newComment }
        newComment[name] = event.target.value
        this.setState({ newComment })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const transferdata = {
            reviewer_name: this.state.newComment.reviewer_name,
            review: this.state.newComment.review,
            recipe_id: this.props.recipeId
        }

        console.log("From submit function transferdata: ", transferdata)
        await axios.post(`/api/recipes/${this.props.recipeId}/comments/`, transferdata);
        this.props.toggleShowNewForm()
        this.props.getProcedureAndCommentData(this.props.recipeId)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="reviewer_name">Reviewer Name: </label>
                        <input onChange={this.handleChange} type="text" name="reviewer_name" />
                    </div>
                    <div>
                        <label htmlFor="review ">Review: </label>
                        <input onChange={this.handleChange} type="text" name="review" />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NewComment;