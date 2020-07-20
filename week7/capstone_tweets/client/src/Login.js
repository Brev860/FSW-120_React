import React,{useState, useEffect} from 'react'

const Login = () =>{
 const [userName, setUserName] = useState('')
 const [password, setPassword] = useState('')
 const [isLoggedin, setIsLoggedIn] = useState('')
 const [user, setUser] = useState([])

 const handleLogin = (e) =>{
       e.preventDefault()
       let newLogin = {userName: userName, password: password}
         setUser({...user, newLogin})
         //resets username field after reset
         setUserName('')
         //resets password field after submit
         setPassword('')
 }
   console.log(user)
     return(
 <div>

    <form onSubmit={handleLogin}>
        <input 
            type='text'
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
           />
           <input 
            type='password'
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           />
           <button>Login</button>
     </form>
           
 </div>
     )
}

export default Login