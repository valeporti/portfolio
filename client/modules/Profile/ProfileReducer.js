// Import Actions
import { 
  TOGGLE_ACTIVE_HARDSKILLS ,
  CONTACT_NAME,
  CONTACT_EMAIL,
  CONTACT_MESSAGE,
  CONTACT_PURPOSE, 
  CONTACT_INDUSTRY,
} from './ProfileActions';

// Initial State
const initialState = {
  activeHS: false,
  contactName: '',
  contactMail: '',
  contactMess: '',
  contactPurp: '',
  contactIndu: '',
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
    case CONTACT_INDUSTRY:
      return Object.assign({}, state, state.contactIndu = action.text);
    case CONTACT_PURPOSE:
      return Object.assign({}, state, state.contactPurp = action.text);
    default:
      return state;
  }
};

export default ProfileReducer;
