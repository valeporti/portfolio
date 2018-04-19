// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_ACTIVE_MENU = 'TOGGLE_ACTIVE_MENU';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleActiveMenu() {
  return {
    type: TOGGLE_ACTIVE_MENU,
  }
}