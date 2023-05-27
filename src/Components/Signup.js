import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Username,Useremail,Userpass,Usertoken } from "../actioncreator";
import "../App.css"

function Signup() {

    let[name,setName] = useState("")
    let[email,setEmail] = useState("")
    let[password,setPassword] = useState("")
    let[confirmPassword,setConfirmPassword] = useState("");
    let[validator,setValidator] = useState(null);
    
    const navigate = useNavigate()
    const dispatch = useDispatch()


    function handel()
    {

        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("password",password)
        
        function generateAuthToken() {
            const randomBytes = new Array(16);
            for (let i = 0; i < randomBytes.length; i++) {
              randomBytes[i] = Math.floor(Math.random() * 256);
            }
            const token = randomBytes.map(byte => byte.toString(16).padStart(2, '0')).join('');
            return token;
          }



const authToken = generateAuthToken();
localStorage.setItem("token",authToken)


       
        if(name && email && password && confirmPassword )
        {
            setValidator(true)
            setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")

        dispatch(Username(name))
        dispatch(Useremail(email))
        dispatch(Userpass(password))
        dispatch(Usertoken(localStorage.getItem("token")))


        navigate("/profile")
        }
        
        else{
            setValidator(false)
        }

         
        
    }




  return (
    <div className='Form'>
      <form>
        <h1 style={{marginBottom:"1.5rem"}}>SignUp</h1>
        <input type="text" placeholder='Full Name' onChange={(e)=>{setName(e.target.value)}} value={name}></input>
        <input type="text" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} value={email}></input>
        <input type="text" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} value={password}></input>
        <input type="text" placeholder='Confirm Password' onChange={(e)=>{setConfirmPassword(e.target.value)}} value={confirmPassword}></input>
       
       
      </form>

      <div>
       
        {
            validator ===true &&
            (
                <p style={{color:"green"}}> Signed Up Succesfully</p>
            )
            
}
{
    validator===false &&
 (
    <p style={{color:"red"}}>All Fields are Mandatory</p>
)
}
           


            
       
       </div>

      <button onClick={handel}>SignUp</button>
    </div>
  )
}

export default Signup
