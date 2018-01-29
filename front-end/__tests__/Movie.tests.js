import React from 'react'
import Movie from '../src/Movie'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Movie', () => {
  const movieObject = {title: 'test title', overview: 'test overview', poster_path: 'test_poster_path'}
  const wrapper = shallow(<Movie movie={movieObject} index={1}/>)

  it('outer element is a <div>', () => {
    expect(wrapper.type()).toEqual('div')
  });

  it('has a div that renders the movie title', () => {
    expect(wrapper.find('.movie-title-1').text()).toEqual('test title')
  });

  it('has a div that renders the movie overview', () => {
    expect(wrapper.find('.movie-overview-1').text()).toEqual('test overview')
  });

  it('has an image tag with the source including the relevant poster path', () => {
    // console.log(wrapper.find('.movie-image-1').attribute)
    expect(wrapper.find('.movie-image-1').prop('src')).toEqual("http://image.tmdb.org/t/p/w185/test_poster_path")
  });

});
