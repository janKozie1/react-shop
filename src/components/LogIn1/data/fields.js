export let fields = [
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

export let emptyFields = {
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