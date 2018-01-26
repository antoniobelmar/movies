import React, { Component } from 'react';
import axios from 'axios'
import apiData from './config.json'

class MovieContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: []
    }
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
      <div className="App">
        Hello
      </div>
    );
  }
}

export default MovieContainer;
