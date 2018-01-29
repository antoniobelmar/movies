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

});
