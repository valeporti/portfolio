// Export Constants
export const TOGGLE_ACTIVE_HARDSKILLS = 'TOGGLE_ACTIVE_HARDSKILLS';
export const CONTACT_NAME = 'CONTACT_NAME';
export const CONTACT_EMAIL = 'CONTACT_EMAIL';
export const CONTACT_MESSAGE = 'CONTACT_MESSAGE';
export const CONTACT_PURPOSE = 'CONTACT_PURPOSE';
export const CONTACT_INDUSTRY = 'CONTACT_INDUSTRY';

// Export Actions
export function toggleActiveHS(bool) {
    return {
        type: TOGGLE_ACTIVE_HARDSKILLS,
        bool,
    }
}
export function contactNameInput(text) {
    return {
        type: CONTACT_NAME,
        text,
    }
}
export function contactEmailInput(text) {
    return {
        type: CONTACT_EMAIL,
        text,
    }
}
export function contactMessInput(text) {
    return {
        type: CONTACT_MESSAGE,
        text,
    }
}
export function contactInduInput(text) {
    return {
        type: CONTACT_INDUSTRY,
        text,
    }
}
export function contactPurpInput(text) {
    return {
        type: CONTACT_PURPOSE,
        text,
    }
}