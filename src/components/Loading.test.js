import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';
import { shallow } from 'enzyme';

describe("Loading Component", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<Loading />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})