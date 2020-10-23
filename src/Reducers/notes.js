

const initialState = []

const notesReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'FETCH_NOTES_SUCCESS':
            return [...action.payload]
        case 'REMOVE_NOTE':
            const newNotes = state.filter(note => note.id !== action.payload)
            return newNotes
        case 'SHOW_NOTE':
            const id = parseInt(action.payload)
            const note = state.filter(note => note.id === id)
            return note
        case 'EDIT_NOTE_SUCCESS':
            const newNote = {
                ...state[0], 
                title: action.payload.title,
                body: action.payload.body,
                category: action.payload.category
            }
            return [newNote]
        default:
            return state
    }
}

export default notesReducer