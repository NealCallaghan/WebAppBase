import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { ApplicationBar } from 'components/navigation/applicationBar';

configure({ adapter: new Adapter() });

const mockFunction = jest.fn();

describe('Tests for the application bar presentational component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ApplicationBar openMenu={mockFunction} closeMenu={mockFunction} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('ApplicationBar component shallow renders.', () => {
    const wrapper = shallow(<ApplicationBar openMenu={mockFunction} closeMenu={mockFunction} />);
    expect(wrapper.find('.ApplicationBar')).toBeTruthy();
  });

  it('ApplicationBar component mount renders.', () => {
    const wrapper = mount(<ApplicationBar openMenu={mockFunction} closeMenu={mockFunction} />);
    expect(wrapper.find('.ApplicationBar')).toBeTruthy();
  });

  it('ApplicationBar has an app bar child component from material ui.', () => {
    const wrapper = mount(<ApplicationBar openMenu={mockFunction} closeMenu={mockFunction} />);
    expect(wrapper.find('AppBar')).toHaveLength(1);
  });

  it('ApplicationBar app bar child has button.', () => {
    const wrapper = mount(<ApplicationBar openMenu={mockFunction} closeMenu={mockFunction} />);
    expect(wrapper.find('IconButton')).toHaveLength(1);
  });

  it('ApplicationBar calls openMenu function.', () => {
    const mockOpenFunc = jest.fn();
    const wrapper = mount(<ApplicationBar openMenu={mockOpenFunc} closeMenu={mockFunction} />);
    const appBarButton = wrapper.find('IconButton');
    appBarButton.simulate('click');
    expect(mockOpenFunc).toBeCalled();
  });
});
