const initialState = {
    role: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'isCustomer':
            return {
                ...state,
                role: action.payload
            }
            
        default:
            return state
    }
}

export default reducer