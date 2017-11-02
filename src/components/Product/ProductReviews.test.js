import React from 'react';
import ReactDOM from 'react-dom';
import ProductReviews from './ProductReviews';
import { shallow } from 'enzyme';

describe("ProductReviews Component", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<ProductReviews />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})