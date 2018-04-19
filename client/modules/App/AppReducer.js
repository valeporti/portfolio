// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_ACTIVE_MENU } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  activeMenu: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    case TOGGLE_ACTIVE_MENU:
      return {
        activeMenu: !state.activeMenu,
      }
    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

// Export Reducer
export default AppReducer;
