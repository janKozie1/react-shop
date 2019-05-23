export let signup = [
    {
        text:'first name',
        id:'name',
        type:'text',
        required:true,
        autoId:'given-name',
        validation:(input)=>{
            let regex = /^[a-zA-Z]+$/;
            if(input.length<3){
                return {err:`Name is too short`,value:false}
            }else if(!regex.test(input)){
                return {err:'Name is invalid',value:false}
            }
            return {err:'',value:true};
        }
    },
    {
        text:'surname',
        type:'text',
        required:false,
        autoId:'family-name',
        validation:(input)=>{
            let regex =  /^[a-zA-Z]+$/
            if(input.length<3){
                return {err:`Surname is too short`,value:false}
            }else if(!regex.test(input)){
                return {err:'Surname is invalid',value:false}
            }
            return {err:'',value:true};
        }
    },
    {
        text:'email',
        type:'email',
        required:true,
        autoId:'email',
        validation:(input)=>{
            let regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            if(!input.length){
              return {err:`E-mail is required`,value:false}  
            }else if(!regex.test(input)){
                return {err:`This e-mail is invalid`,value:false}
            }
            return {err:'',value:true};
        }
    },
    {
        text:'password',
        type:'password',
        autoId:'off',
        required:true,
        validation:(input,state)=>{
            if(input.length<6){
                return {err:'Password is too short',value:false}
            }
            return {err:'',value:true};
        }
    },
    {
        text:'confirm password',
        id:'cPassword',
        type:'password',
        autoId:'off',
        required:true,
        validation:(input,state)=>{
            if(input!==state.password.value){
                return {err:`Passwords are different`,value:false}
            }else if(input.length<6){
                return {err:'Password too short',value:false}
            }
            
            return {err:'',value:true};
        }
    },
]

export let emptySignup = {
    name:{
        value:'',
        valid:{
            value:false,
            err:"Can't be empty"
        }
    },
    surname:{
        value:'',
        valid:{
            value:false,
            err:"Can't be empty"
        }
    },
    email:{
        value:'',
        valid:{
            value:false,
            err:"Can't be empty"
        }
    },
    password:{
        value:'',
        valid:{
            value:false,
            err:"Can't be empty"
        }
    },
    cPassword:{
        value:'',
        valid:{
            value:false,
            err:"Can't be empty"
        }
    },
}
export let login = [
    {
        text:'email',
        type:'email',
        required:true,
        autoId:'email',
        validation:(input)=>{
            let regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            if(!input.length){
              return {err:`E-mail is required`,value:false}  
            }else if(!regex.test(input)){
                return {err:`This e-mail is invalid`,value:false}
            }
            return {err:'',value:true};
        }
    },
    {
        text:'password',
        type:'password',
        autoId:'off',
        required:true,
        validation:(input,state)=>{
            if(input.length<6){
                return {err:'Password is too short',value:false}
            }
            return {err:'',value:true};
        }
    },
]

export let emptyLogin = {
    email:{
        value:'',
        valid:{
            value:false,
            err:"Can't be empty"
        }
    },
    password:{
        value:'',
        valid:{
            value:false,
            err:"Can't be empty"
        }
    },
}