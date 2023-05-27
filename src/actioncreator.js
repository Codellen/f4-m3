import { NAME,EMAIL,PASSWORD,TOKEN,DELETEEMAIL,DELETENAME,DELETEPASS } from "./action"
export function Username(name){
    return{
      type:NAME,
      payload:name

    }
}
export function Useremail(email){
    return{
      type:EMAIL,
      payload:email

    }
}
export function Userpass(password){
    return{
      type:PASSWORD,
      payload:password

    }
}
export function Usertoken(token){
    return{
      type:TOKEN,
      payload:token

    }
}

export function Deletename(){
    return{
        type:DELETENAME,
    }
}
export function Deletepass(){
    return{
        type:DELETEPASS,
    }
}
export function Deleteemail(){
    return{
        type:DELETEEMAIL,
    }
}