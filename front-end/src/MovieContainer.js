import React, { Component } from 'react';

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
