import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NewComment from './NewComment';
import { Jumbotron } from 'react-bootstrap';

class RecipeProcedure extends Component {
    state = {
        procedures: [],
        comments: [],
        showNewForm: false
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
            console.log('Comment Response: ', commentResponse.data)
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

    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }

    createPost = (newComment) => {
        console.log('create new comment called')
        axios.post('/api/recipes/:recipe_id/comments', { newComment })
            .then((res) => {
                console.log(res.data)
                const comments = [this.state.comments]
                comments.push(res.data)
                this.setState({ comments })
            })
    }

    removeComment = (comment) => {
        console.log('Renove Comment function is called ')
        axios.delete(`/api/recipes/${comment.recipe_id}/comments/${comment.id}`)
            .then(() => {
                this.getProcedureAndCommentData(comment.recipe_id)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        console.log(this.state.procedures)
        const procedureId = this.props.match.params.recipe_id;
        const procedureData = this.state.procedures.map((procedure, index) => {
            return (
                <div key={index}>
                    <h2>{procedure.title}</h2>
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
                    <h2>{comment.reviewer_name}</h2>
                    <h4>{comment.review}</h4>
                    <Button bsStyle="danger" onClick={() => {this.removeComment(comment)}}>Delete Comment</Button>
                </div>
            )
        })

        return (
            <div>
                <Jumbotron>
                <h1>RecipeProcedure</h1>
                <Link to='/'><Button bsStyle="info">Home</Button></Link>
                </Jumbotron>
                {procedureData}
                <Jumbotron>
                <h1>Comments</h1>
                </Jumbotron>
                <Button bsStyle="success" onClick={this.toggleShowNewForm}>Post a Comment</Button>
                {this.state.showNewForm ? <NewComment toggleShowNewForm={this.toggleShowNewForm} recipeId={this.props.match.params.recipe_id} getProcedureAndCommentData={this.getProcedureAndCommentData}/> : null}
                {commentData}
            </div>
        );
    }
}

export default RecipeProcedure;

const ImageStyle = styled.div`
img {width:100%}
`