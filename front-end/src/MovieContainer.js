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


  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default MovieContainer;
