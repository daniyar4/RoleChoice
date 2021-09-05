const initialState = {
    isCustomer: null,
    avatar: 'https://firebasestorage.googleapis.com/v0/b/react-native-delivery.appspot.com/o/images%2Fno-avatar.jpg?alt=media&token=8e2504c6-4fdf-449d-86ca-396c19f98460',
    abouteMe: '',
    reviews: [],
    order: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'isCustomer':
            return {
                ...state,
                role: action.payload
            }
            case 'getAvatar':
                return {
                    ...state,
                    avatar: action.payload
                }
            case 'getAbouteMe':
                return {
                    ...state,
                    abouteMe: action.payload
                }
            case 'getReviews':
                return {
                    ...state,
                    reviews: action.payload
                }
            
        default:
            return state
    }
}

export default reducer