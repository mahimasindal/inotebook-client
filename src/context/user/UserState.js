import axios from 'axios'
import React, { useState } from 'react'
import UserContext from './userContext'

const UserState = (props) => {
    const host =  "https://inotebook-your-notes.herokuapp.com" //"http://localhost:5000";
    const [isAuth, setIsAuth]=useState(false)
    const [user, setUser]=useState({name:"",email:""})

    const getUser=()=>{
        //console.log("token=",localStorage.getItem('token'))
        //console.log("url=",`${host}/api/auth/getuser`)
        axios(
        {
            url:`${host}/api/auth/getuser`,
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')}
        }).then(
            (res)=>{
                //console.log(res.data.name);
                 setIsAuth(true)
                 setUser({name:res.data.name, email:res.data.email})
                 console.log("auth-token=",localStorage.getItem('token'))
            }
            
        )
    }

  return (
    <UserContext.Provider value={{isAuth, setIsAuth, getUser, user, setUser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
