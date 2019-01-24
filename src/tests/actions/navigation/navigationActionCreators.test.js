import * as navigationActions from 'actions/navigation/navigationActionTypes';
import { openMenu, closeMenu, changeAreaTitle } from 'actions/navigation/navigationActionCreators';

describe('Ensure that action creators have correct payload and actions', () => {
  it('open menu has correct constant', () => {
    const result = openMenu({});
    expect(result.type).toEqual(navigationActions.OPEN_MENU_SUCCESS);
  });

  it('open menu target returns payload', () => {
    const payload = { data: 'payload' };
    const result = openMenu(payload);
    expect(result.target).toBe(payload);
  });

  it('close menu has correct constant', () => {
    const result = closeMenu();
    expect(result.type).toEqual(navigationActions.CLOSE_MENU_SUCCESS);
  });

  it('close menu target returns payload', () => {
    const result = closeMenu();
    expect(result.target).toBe(null);
  });

  it('change area title has correct constant', () => {
    const result = changeAreaTitle({});
    expect(result.type).toEqual(navigationActions.CHANGE_AREA_TITLE_SUCCESS);
  });

  it('change area title returns title', () => {
    const title = { data: 'payload' };
    const result = changeAreaTitle(title);
    expect(result.title).toBe(title);
  });
});
