export const fetchNotesSuccess = (payload) => {
    return {
        type: 'FETCH_NOTES_SUCCESS',
        payload
    }
}

export const addNote = (payload) => {
    return {
        type: 'ADD_NOTE',
        payload
    }
}

export const removeNote = (payload) => {
    return {
        type: 'REMOVE_NOTE',
        payload
    }
}

export const showNote = (payload) => {
    return {
        type: 'SHOW_NOTE',
        payload
    }
}

export const editNoteSuccess = (payload) => {
    return {
        type: 'EDIT_NOTE_SUCCESS',
        payload
    }
}