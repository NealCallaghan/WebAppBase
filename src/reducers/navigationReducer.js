import { OPEN_MENU_SUCCESS, CLOSE_MENU_SUCCESS, CHANGE_AREA_TITLE_SUCCESS } from 'actions/navigation/navigationActionTypes';

const initialState = {
  menuAnchor: null,
  areaTitle: 'default',
};

export default function navigationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_MENU_SUCCESS:
      return {
        ...state,
        menuAnchor: action.target };

    case CLOSE_MENU_SUCCESS:
      return {
        ...state,
        menuAnchor: null,
      };

    case CHANGE_AREA_TITLE_SUCCESS:
      return {
        ...state,
        areaTitle: action.title,
      };

    default:
      return state;
  }
}
