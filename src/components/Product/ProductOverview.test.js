import React from 'react';
import ReactDOM from 'react-dom';
import ProductOverview from './ProductOverview';
import { shallow } from 'enzyme';

describe("ProductOverview Component", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<ProductOverview />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})