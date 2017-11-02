import React from 'react';
import ReactDOM from 'react-dom';
import ModalRoot from './ModalRoot';
import { shallow } from 'enzyme';

describe("ModalRoot Container", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<ModalRoot />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})