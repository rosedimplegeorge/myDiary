import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

class RecipeProcedure extends Component {
    state = {
        recipes: [],
        procedures: [],
        comments: []
    }

    

    componentDidMount(){
        const recipeId = this.props.match.params.recipe_id
        this.getProcedureAndCommentData(recipeId)
    }

    getProcedureAndCommentData = async (recipeId) => {
        try {
            const procedureResponse = await axios.get(`/api/recipes/${recipeId}/procedures`)
            const commentResponse = await axios.get(`/api/recipes/${recipeId}/comments`)
            console.log('ProcedureResponse: ', procedureResponse.data)
            await this.setState({
                procedures: procedureResponse.data,
                comments: commentResponse.data
            });
        }
        catch (error) {
            console.log(error)
            await this.setState({ error: error.message })
        }
    }

    render() {
        console.log(this.state.procedures)
        const procedureId = this.props.match.params.recipe_id;
        const procedureData = this.state.procedures.map((procedure, index) => {
            return (
                <div key={index}>
                    <h4>{procedure.title}</h4>
                    <h4>{procedure.description}</h4>
                    <ImageStyle>
                    <img src={procedure.photo_url} alt="404NotFound" />
                    </ImageStyle>
                </div>
            )
        })
        
        const commentData = this.state.comments.map((comment, index) => {
            return (
                <div key={index}>
                    <h4>{comment.reviewer_name}</h4>
                    <h4>{comment.review}</h4>
                </div>
            )
        })



        return (
            <div>
                <h1>RecipeProcedure</h1>
                {procedureData}
                {commentData}
            </div>
        );
    }
}

export default RecipeProcedure;

const ImageStyle = styled.div`
img {width:100%}
`