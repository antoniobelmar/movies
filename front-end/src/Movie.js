import React, { Component } from 'react';

class Movie extends Component {

  render() {
    return (
      <div key={this.props.index}>
        <div className={'movie-title-'+this.props.index}>{this.props.movie.title}</div>
        <div className={'movie-overview-'+this.props.index}>{this.props.movie.overview}</div>
        <img className={'movie-image-'+this.props.index} src={'http://image.tmdb.org/t/p/w185/'+this.props.movie.poster_path} alt='Not found'/>
      </div>
    )
  }
}


export default Movie;
