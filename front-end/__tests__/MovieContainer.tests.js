import React from 'react'
import '../src/testHelpers.js'
import MovieContainer from '../src/MovieContainer'
import { shallow, mouunt } from 'enzyme';

describe('MovieContainer', () => {
  const wrapper = shallow(<MovieContainer />)

  it('outer element is a <div>', () => {
    expect(wrapper.type()).toEqual('div')
  });

  it('renders the Movie component when movies are in state', () => {
    wrapper.setState({movies: ['movie']})
    expect(wrapper.find('Movie').length).toEqual(1)
  })

});
