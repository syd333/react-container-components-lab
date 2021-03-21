import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
    this.state={
        reviews: [],
        searchTerm: ''
    }
}

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }

    render(){
        return(
            <div>
                <form onSubmit = {event => this.handleSubmit(event)}>
                    <input type="text" 
                        name= "search"
                        onChange={event => {this.handleChange(event)}}>
                    </input>
                    <input type="submit" value="Submit"></input>
                </form>
                {this.state.reviews ? <MovieReviews reviews={this.state.reviews}/> : null } 
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;