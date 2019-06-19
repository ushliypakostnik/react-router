import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Menu from '../components/menu';

describe('menu render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Menu children={[]} />);
  });

  it('should render correctly', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
