import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './NotFound';
import { shallow } from 'enzyme';

describe("NotFound Container", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<NotFound />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})