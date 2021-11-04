import React from 'react';
import { shallow } from 'enzyme';
import { ProductPageCardComponent } from './ProductPageCard';

describe('Component ProductPageCard', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductPageCardComponent />);
    expect(component).toBeTruthy();
  });
});
