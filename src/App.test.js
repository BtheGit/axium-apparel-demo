import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe("App Container", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<App />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})