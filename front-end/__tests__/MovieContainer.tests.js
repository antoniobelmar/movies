import React from 'react'
import MovieContainer from '../src/MovieContainer'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
