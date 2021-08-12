const initialState = {
    role: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'roleChoice':
            return {
                ...state,
                role: action.payload
            }
            
        default:
            return state
    }
}

export default reducer