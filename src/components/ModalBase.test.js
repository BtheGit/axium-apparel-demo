import React from 'react';
import ReactDOM from 'react-dom';
import ModalBase from './ModalBase';
import { shallow } from 'enzyme';

describe("ModalBase Component", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<ModalBase />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})