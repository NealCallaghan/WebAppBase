import * as navigationActions from './navigationActionTypes';

export function openMenu(target) {
  return { type: navigationActions.OPEN_MENU_SUCCESS, target };
}

export function closeMenu() {
  return { type: navigationActions.CLOSE_MENU_SUCCESS, target: null };
}

export function changeAreaTitle(title) {
  return { type: navigationActions.CHANGE_AREA_TITLE_SUCCESS, title };
}
