// Import Actions
import { TOGGLE_ACTIVE_HARDSKILLS } from './ProfileActions';

// Initial State
const initialState = {
  activeHS: false,
};

const ProfileReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case TOGGLE_ACTIVE_HARDSKILLS:
      return Object.assign({}, state, state.activeHS = action.bool);
    default:
      return state;
  }
};

export default ProfileReducer;
