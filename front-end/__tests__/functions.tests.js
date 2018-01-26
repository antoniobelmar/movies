import React from 'react'
import App from '../src/App'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
  const wrapper = shallow(<App />)

  it('contains a <div>', () => {
    expect(wrapper.type()).toEqual('div')
  });
});
