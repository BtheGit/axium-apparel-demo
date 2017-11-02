import React from 'react';
import ReactDOM from 'react-dom';
import DropdownColumn from './DropdownColumn';
import { shallow } from 'enzyme';

describe("DropdownColumn Component", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<DropdownColumn />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})