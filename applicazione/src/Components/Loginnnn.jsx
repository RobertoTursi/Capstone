import { useEffect, useRef, useState, useContext } from 'react'
import AuthContext from '../context/AuthProvider';
import axios from '../api/axios';


const LOGIN_URL = '/api/auth/login'

const Loginnnn = () => {

    const { setAuth } = useContext(AuthContext)  //setAuth è prelevato da uno stato globale creato nella cartella context
    //nel file "AuthContext.js", per farlo abbiamo aggiunto al main.jsx l'"<AuthProvider>" 

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])


    const handleSubmit = async (e) => {
        e.preventDefault

   
            try{
              let response = await fetch('http://localhost:8085/api/auth/login', {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({user, pwd})
              })
              if(response.ok) {
                console.log(await response.json())
              }
            }catch(error){
              console.log("LOGIN: ", error)
          

        // try{
        //     const response = await axios.post(LOGIN_URL, 
        //         JSON.stringify({ user, pwd }),
        //         {
        //             Headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         }
        //     )
        //     console.log(JSON.stringify(response?.data))
        //     // console.log(JSON.stringify(response))
        //     const accessToken = response?.data?.accessToken
        //     const roles = response?.data?.roles
        //     setAuth({ user, pwd, roles, accessToken })
        //     setUser('')
        //     setPwd('')
        //     setSuccess(true)
        // }catch(err){
        //     if(!err.response){
        //         setErrMsg('No Server Response')
        //     } else if(err.response?.status === 400){
        //         setErrMsg('Missing Username or Password')
        //     } else if(err.response?.status === 401){
        //         setErrMsg('Unauthorized')
        //     } else {
        //         setErrMsg('Login failed')
        //     }
        //     errRef.current.focus()
        // }

       
    }}

  return (
    <>
    {success ? (
        <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
                <a href="#">Go to Home</a>
            </p>
        </section>
    ) : (
    <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                name="username"
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required 
            />

            <label htmlFor="password">Password:</label>
            <input 
                type="password"
                id='password'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required            
            />

            <button>Sign In</button>
        </form>

        <p>
            Need an Account?<br />
            <span className='line'>
                {/* Put router link here */}
                <a href="#">Sign Up</a>
            </span>
        </p>

    </section>
    )}
    </>
  )
}

export default Loginnnn