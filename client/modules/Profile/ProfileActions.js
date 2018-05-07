// Export Constants
export const TOGGLE_ACTIVE_HARDSKILLS = 'TOGGLE_ACTIVE_HARDSKILLS';

// Export Actions
export function toggleActiveHS(bool) {
    return {
        type: TOGGLE_ACTIVE_HARDSKILLS,
        bool,
    }
}
