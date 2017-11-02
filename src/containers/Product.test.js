import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
import { shallow } from 'enzyme';

describe("Product Container", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<Product />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})