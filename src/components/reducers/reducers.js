export const userDataReducer = (state, action) => {
    switch (action.type) {
        case 'edit':{
            let temp = {...state};
            temp[action.field].value = action.data;
            temp[action.field].valid = action.validation(action.data,state);
            return {...temp};
        }
        case 'empty':{
            let temp = {...state}
            for(let field in temp){
                temp[field].value='';
                temp[field].valid={
                    value:false,
                    err:"Can't be empty"
                }
            }
            return {...temp}
        }
        case 'changeType':{
            return {...action.fields}

        }
        default:{
            return state;
        }
    }
}
export const resultReducer = (state,action) =>{
    switch(action.type){
        case 'updateResult':{
            return {...action.payload}
        }
        case 'restoreDefault':{
            console.log("?")
            return {text:'Loading',secText:'',type:'loading'}
        }
    }
}
export const uxReducer = (state,action) => {
    switch (action.type) {
        case 'toggleSideNav':{
            let temp = {...state};
            temp.sideNavVisible = action.value;
            temp.bgFadeVisible = action.value;
            return {...temp}
        }
        case 'toggleBgFade': {
            let temp = {...state};
            temp.bgFadeVisible = action.value;
            return {...temp}
        }
    }
}

