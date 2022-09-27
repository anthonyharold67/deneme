import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setUserInfo}) => {
    const [mail,setMail] = useState("")
    const [password,setPassword] = useState("")
    const navigate=useNavigate()
    const handleSubmit = async ()=>{
        if(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password)){
            await setUserInfo(mail)
            navigate("/main")
        }else {
            alert("şifreniz en az 8 haneli olmalı,harf ve rakam içermelidir")
        }
    }

  return (
    <div className='container'>
        <h1>Login</h1>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={mail} onChange={(e)=> setMail(e.target.value)} required />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
  </div>
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
  </div>
  )
}

export default Login