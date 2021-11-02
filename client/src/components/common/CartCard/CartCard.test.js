import React from 'react';
import { shallow } from 'enzyme';
import { CartCardComponent } from './CartCard';

describe('Component CartCard', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartCardComponent />);
    expect(component).toBeTruthy();
  });
});
