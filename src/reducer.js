
const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case 'ADD_MODEL':
            return [
                ...state,
                action.payload
            ]        
        default:
            return state
    }
}

// const action = {
//     type: 'ADD_MODEL',
//     payload: {
//         // manufacturer,
//         // year,
//         // origin
//     }
// }

// store.dispatch(action)

export default reducer