import React from 'react';
import ReactDOM from 'react-dom';
import ModalReview from './ModalReview';
import { shallow } from 'enzyme';

describe("ModalReview Component", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<ModalReview />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})