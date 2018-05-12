// Import Actions
import { 
  TOGGLE_ACTIVE_HARDSKILLS ,
  CONTACT_NAME,
  CONTACT_EMAIL,
  CONTACT_MESSAGE,
} from './ProfileActions';

// Initial State
const initialState = {
  activeHS: false,
  contactName: '',
  contactMail: '',
  contactMess: '',
};

const ProfileReducer = (state = initialState, action) => {
  //sconsole.log(state);
  switch (action.type) {
    case TOGGLE_ACTIVE_HARDSKILLS:
      return Object.assign({}, state, state.activeHS = action.bool);
    case CONTACT_NAME:
      return Object.assign({}, state, state.contactName = action.text);
    case CONTACT_EMAIL:
      return Object.assign({}, state, state.contactMail = action.text);
    case CONTACT_MESSAGE:
      return Object.assign({}, state, state.contactMess = action.text);
    default:
      return state;
  }
};

export default ProfileReducer;
