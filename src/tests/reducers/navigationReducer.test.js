import { openMenu, closeMenu, changeAreaTitle } from 'actions/navigation/navigationActionCreators';
import navReducer from 'reducers/navigationReducer';

describe('Tests whether the navigation reducer contains pure functions', () => {
  it('given openMenu state is changed in the reducer for menuAnchor', () => {
    const action = openMenu('label');
    const newState = navReducer({}, action);
    expect(newState.menuAnchor).toBe('label');
  });

  it('given openMenu state is changed in the reducer returns new object', () => {
    const initialState = {};
    const action = openMenu('label');
    const newState = navReducer(initialState, action);
    expect(initialState).not.toMatchObject(newState);
  });

  it('given openMenu state is changed in the reducer and is immutable', () => {
    const initialState = {};
    const action = openMenu('label');
    const newState = navReducer(initialState, action);
    expect(initialState !== newState).toBe(true);
  });

  it('given closeMenu state is changed in the reducer for menuAnchor', () => {
    const action = closeMenu();
    const newState = navReducer({}, action);
    expect(newState.menuAnchor).toBe(null);
  });

  it('given closeMenu state is changed in the reducer and is immutable', () => {
    const initialState = {};
    const action = closeMenu();
    const newState = navReducer(initialState, action);
    expect(initialState !== newState).toBe(true);
  });

  it('given closeMenu state is changed in the reducer returns new object', () => {
    const initialState = {};
    const action = closeMenu();
    const newState = navReducer(initialState, action);
    expect(initialState).not.toMatchObject(newState);
  });

  it('given changeAreaTitle state is changed in the reducer for menuAnchor', () => {
    const action = changeAreaTitle('a title');
    const newState = navReducer({}, action);
    expect(newState.areaTitle).toBe('a title');
  });

  it('given changeAreaTitle state is changed in the reducer returns new object', () => {
    const initialState = {};
    const action = changeAreaTitle('a title');
    const newState = navReducer(initialState, action);
    expect(initialState).not.toMatchObject(newState);
  });

  it('given changeAreaTitle state is changed in the reducer and is immutable', () => {
    const initialState = {};
    const action = changeAreaTitle('a title');
    const newState = navReducer(initialState, action);
    expect(initialState !== newState).toBe(true);
  });

  it('given empty actions and state default nav state is returned.', () => {
    const defaultState = navReducer();
    expect(defaultState.menuAnchor).toBe(null);
    expect(defaultState.areaTitle).toBe('default');
  });
});
