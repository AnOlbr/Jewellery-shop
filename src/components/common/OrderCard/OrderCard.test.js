import React from 'react';
import { shallow } from 'enzyme';
import { OrderCardComponent } from './OrdertCard';

describe('Component OrderCard', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderCardComponent />);
    expect(component).toBeTruthy();
  });
});
