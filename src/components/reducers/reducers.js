export const userDataReducer = (state, action) => {
    switch (action.type) {
        case 'edit':{
            let temp = {...state};
            temp[action.field].value = action.data;
            return {...temp};
        }
        case 'validate':{
            let temp = {...state};
            temp[action.field].valid = action.data;
            return {...temp}
        }
        default:{
            return state;
        }
    }
}

