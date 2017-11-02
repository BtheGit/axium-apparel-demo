import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { shallow } from 'enzyme';

describe("Home Container", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<Home />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})