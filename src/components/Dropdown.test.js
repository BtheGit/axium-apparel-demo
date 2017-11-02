import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';
import { shallow } from 'enzyme';

describe("Dropdown Component", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<Dropdown />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})