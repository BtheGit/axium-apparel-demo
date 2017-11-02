import React from 'react';
import ReactDOM from 'react-dom';
import ProductTest from './ProductTest';
import { shallow } from 'enzyme';

describe("ProductTest Component", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<ProductTest />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})