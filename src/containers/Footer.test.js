import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe("Footer Container", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<Footer />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})