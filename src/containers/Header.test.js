import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

describe("Header Container", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<Header />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})