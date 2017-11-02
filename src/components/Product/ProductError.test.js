import React from 'react';
import ReactDOM from 'react-dom';
import ProductError from './ProductError';
import { shallow } from 'enzyme';

describe("ProductError Component", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<ProductError />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})