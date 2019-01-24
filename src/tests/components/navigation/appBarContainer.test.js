import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { AppBarContainer } from 'components/navigation/appBarContainer';

configure({ adapter: new Adapter() });

const mockFunction = jest.fn();

describe('Tests for the application bar container component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppBarContainer openMenu={mockFunction} closeMenu={mockFunction} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('AppBarContainer component shallow renders.', () => {
    const wrapper = shallow(<AppBarContainer openMenu={mockFunction} closeMenu={mockFunction} />);
    expect(wrapper.find('.AppBarContainer')).toBeTruthy();
  });

  it('AppBarContainer component mount renders.', () => {
    const wrapper = mount(<AppBarContainer openMenu={mockFunction} closeMenu={mockFunction} />);
    expect(wrapper.find('.AppBarContainer')).toBeTruthy();
  });

  it('AppBarContainer has an app bar child component.', () => {
    const wrapper = mount(<AppBarContainer openMenu={mockFunction} closeMenu={mockFunction} />);
    expect(wrapper.find('ApplicationBar')).toHaveLength(1);
  });

  it('AppBarContainer app bar child has button.', () => {
    const wrapper = mount(<AppBarContainer openMenu={mockFunction} closeMenu={mockFunction} />);
    expect(wrapper.find('ApplicationBar').find('IconButton')).toHaveLength(1);
  });

  it('AppBarContainer calls openMenu function.', () => {
    const mockOpenFunc = jest.fn();
    const wrapper = mount(<AppBarContainer openMenu={mockOpenFunc} closeMenu={mockFunction} />);
    const appBarButton = wrapper.find('ApplicationBar').find('IconButton');
    appBarButton.simulate('click');
    expect(mockOpenFunc).toBeCalled();
  });
});
