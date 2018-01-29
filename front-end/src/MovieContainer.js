import React, { Component } from 'react';
import axios from 'axios'
import apiData from './config.json'
import Movie from './Movie'

class MovieContainer extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentWillMount(request = axios){
    let self = this
    request.get(`${apiData.baseUrl}discover/movie?api_key=${apiData.apiKey}`)
    .then( function(response) {
      let newState = self.state
      newState.movies = response.data.results
      self.setState(newState)
    })
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies &&
          this.state.movies.map(function(movie, index) {
            return(
              <div key={index}>
                <Movie
                  movie = {movie}
                  index = {index}
                />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default MovieContainer;
