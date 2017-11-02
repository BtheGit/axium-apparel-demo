import React from 'react';
import ReactDOM from 'react-dom';
import ProductReview from './ProductReview';
import { shallow } from 'enzyme';

describe("ProductReview Component", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<ProductReview />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})