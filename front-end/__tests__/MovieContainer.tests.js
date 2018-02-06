import React from 'react'
import '../src/testHelpers.js'
import MovieContainer from '../src/MovieContainer'
import { shallow, mount } from 'enzyme';
import {sinon, spy} from 'sinon';

describe('MovieContainer', () => {
  const wrapper = shallow(<MovieContainer />)

  it('outer element is a <div>', () => {
    expect(wrapper.type()).toEqual('div')
  });

  it('renders the Movie component when movies are in state', () => {
    wrapper.setState({movies: ['movie']})
    expect(wrapper.find('Movie').length).toEqual(1)
  })

  it('calls componentWillMount', () => {
    spy(MovieContainer.prototype, 'componentWillMount');
    const wrapper2 = mount(<MovieContainer />)
    expect(MovieContainer.prototype.componentWillMount.calledOnce).toEqual(true)
  })

});
