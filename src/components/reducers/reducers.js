export const userDataReducer = (state, action) => {
    switch (action.type) {
        case 'edit-email': {
            return { ...state, email: action.data }
        }
        case 'edit-password': {
            return { ...state, password: action.data }
        }
        case 'edit-name': {
            return { ...state, name: action.data }
        }
        case 'edit-surname': {
            return { ...state, surname: action.data }
        }
        case 'edit-cPassword': {
            return { ...state, cPassword: action.data }
        }
        case 'reset':{
            return action.data;
        }
        default: {
            return state;
        }
    }
}
