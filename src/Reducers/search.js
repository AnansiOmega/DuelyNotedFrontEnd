const initialState = ''

const searchReducer = (state=initialState, action) => {
    switch(action.type){
        case 'FILTER_NOTES':
            return action.payload.target.value
        default: 
        return state
    }
}

export default searchReducer