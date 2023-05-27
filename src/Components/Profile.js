import React from 'react'
import { Deletepass,Deleteemail,Deletename } from '../actioncreator';
import "../App.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
function Profile() {

  let getName = useSelector((state)=> state.data.name)
  console.log(getName)
  let getEmail = useSelector((state)=> state.data.email)
  let getPassword = useSelector((state)=> state.data.pass)
  let getToken = useSelector((state)=> state.data.token)
  let  deleteName = useSelector((state)=> state.logout.name)

  console.log(deleteName)
     let deleteEmail = useSelector((state)=> state.logout.email)
     let deletePassword = useSelector((state)=> state.logout.pass)
  
     
     const navigate = useNavigate()
  const dispatch = useDispatch()

  function logout()
  {
     dispatch(Deletename())
     dispatch(Deletepass())
     dispatch(Deleteemail())
    //  getName= "deleteName";
    //  getEmail="";
    //  getPassword=""
     getName= deleteName
     console.log(getToken)
     navigate("/")
  }

  //console.log(getName)

  return (
    <div className='Profile'>
      <h1 style={{marginBottom:"1.5rem"}}>Profile</h1>
      <h2 className='space'>Full Name : {getName} </h2> 
      <h2  className='space'>Email : {getEmail} </h2> 
      <h2  className='space'>Password : {getPassword} </h2> 
        <button onClick={logout}>LogOut</button>
    </div>
  )
}

export default Profile
