export const userDataReducer = (state, action) => {
    switch (action.type) {
        case 'edit':{
            let temp = {...state};
            temp[action.field].value = action.data;
            temp[action.field].valid = action.validation(action.data,state);
            
            return {...temp};
        }
        default:{
            return state;
        }
    }
}

