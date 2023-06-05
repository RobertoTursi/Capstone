import { useState } from 'react'
import { useDispatch } from 'react-redux'
//import { useHistory } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline"


const Login = () => {

    const [nome, setNome] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signUpTriggered, setSignUpTriggered] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    // const [utentiData, setUtentiData] = useState(null)
    const [emailAlreadyExisted, setEmailAlreadyExisted] = useState(false)
    const dispatch = useDispatch()
    
    const [user, setUser] = useState(null)

    const sessionStorage = window.sessionStorage

    // const history = useHistory()

    // const allUtentiFetch = async () => {  
    //     try{
    //         let response = await fetch('http://localhost:8085/utenti',
    //         { headers: { Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkB0ZXN0LmNvbSIsImlhdCI6MTY4NTExNDY2MCwiZXhwIjoxNjg1NzE5NDYwfQ.Dlhjk8-eUYirog19H08Doh1063e0x4YUgyCx70QUbl8yOmjzZP-TPQuXkI-cermm' } }
    //         )
    //         if(response.ok) {
    //             // console.log(await response.json())
    //             const res = await response.json()
    //             setUtentiData(res)
    //             console.log(res)
                
                
    //         }
    //     } catch(error){
    //         console.log("data: ", error)
    //     }
    // }

    // useEffect(() => {
    //     allUtentiFetch()  //fa il fetch di tutti gli utenti al caricamento della pagina
    // }, [])
    // useEffect(() => {
    //     allUtentiFetch()  //fa il fetch di tutti gli utenti al caricamento della pagina
    //     console.log(signUpTriggered)
    // }, [signUpTriggered])

    const handleSubmit = (e) => {
        e.preventDefault()
        // const utente = { nome, username, email, password }  //creo un oggetto con i dati passati nei campi del form // {nome: 'roberto', username: 'tursi' ...}
        
        const utente = {
          "nome": nome,
          "username": username,
          "email": email,
          "password": password
      }

        console.log(utente)

        setIsLoading(!isLoading)
        
        // console.log(utentiData)

        // let notAlreadyExisted = true

        // utentiData.forEach(u => {  //controlla che neanche un utente nel db abbia la stessa email che stiamo utilizzando per registrarci
        //     if(u.email === email){
        //         notAlreadyExisted = false
        //     } 
        // })

        {  //se la email passa il controllo allora:
                fetch('http://localhost:8085/api/auth/register', {  //facciamo il fetch
                // fetch('http://localhost:8085/utenti', {  //facciamo il fetch
                method: 'POST',  //dichiariamo che vogliamo fare un POST
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(utente)  //andiamo a trasformare il nostro oggetto in un json
            }).then(() => {  //se il fetch va a buon fine allora:
                console.log('Utente aggiunto con successo')  //console.log di un messaggio di successo
                setIsLoading(false)   //settiamo lo state 'isLoading' a false in modo tale da sostituire lo spinner del caricamento con il bottone
                // window.location = '/'  //reindirizziamo l'utente alla Home
                // history.push('/')  //fa la stessa cosa di window.location, ma non so perché, non me lo fa importare
            }).catch((error) => {  //se il fetch non va a buon fine allora:
                console.log("errore:",error)  //console.log dell'errore
            })
          }
        // } else {
        //     setIsLoading(false) 
        //     setEmailAlreadyExisted(true)
        // }

        

    }  

    

    // useEffect(() => {
    //   utenteFetch()
    // }, [user])

    const handleLogin = async (e) => {
      e.preventDefault()

    //   let existed = false
    //   utentiData.forEach(u => {  
    //     if(u.username === username){
    //         existed = true
    //     } 
    // })

    // if(existed){
      try{
        let response = await fetch('http://localhost:8085/api/auth/login', {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({username, password})
        })
        if(response.ok) {
          let res = await response.json()
          dispatch({
            type: "ADD_TOKEN",
            payload:res.accessToken
          })
          sessionStorage.setItem('token', res.accessToken)
          dispatch({
            type: "SHOW_LOGIN", 
            payload: false
          })
          dispatch({
            type: "SAVE_UTENTE",
            payload: res
          })
          setUser(res)
          console.log(res)
          setUsername("")
          setPassword("")
        }
      }catch(error){
        console.log("LOGIN: ", error)
    }
    // } else{
    //   window.alert("Credenziali errate")
    // }
    // utenteFetch()
    }
    

  return (

    <div className="divForm">
  <form onSubmit={signUpTriggered ? handleSubmit : handleLogin} className={`${signUpTriggered ? 'bg-login-2' : 'bg-login'} shadow-md rounded px-8 pt-6 pb-8 mb-4 relative`}>
    <div onClick={() => dispatch({type: "SHOW_LOGIN", payload: false})} className='absolute icon-style-2 text-slate-500 top-[5%] right-[5%]'><XMarkIcon className=''/></div>
    {signUpTriggered && <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
      leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" 
      placeholder="Name" value={nome} onChange={e => setNome(e.target.value)}/>
    </div>}

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
      leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" 
      placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
    </div>
    
    {/* LOGIN */}
    {signUpTriggered && <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
        <input onFocus={() => setEmailAlreadyExisted(false)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
      leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" 
      placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
      {emailAlreadyExisted && <span>Email già in uso</span>}
    </div>}

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input required className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3
       text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password"
        type="password" placeholder="******************" value={password} onChange={e => setPassword(e.target.value)}/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>

    <div className="flex items-center justify-between">
      {!isLoading && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="form">
        Sign In
      </button>}
      {isLoading && <button disabled className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="form">
      <li className="flex items-center">
        <div role="status">
            <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
            <span className="sr-only">Loading...</span>
        </div>
        Preparing your file
    </li>
      </button>}
      <span onClick={() => setSignUpTriggered(!signUpTriggered)} 
      className="cursor-pointer inline-block align-baseline font-bold text-sm text-blue-500 
      hover:text-blue-800">
        {!signUpTriggered ? `Non sei registrato?` : `Sei già registrato?`}
      </span>
    </div>
  </form>
</div>

     

  )
}

export default Login


/////////////////////////////////////////////////////////////

// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// //import { useHistory } from "react-router-dom";
// import { XMarkIcon } from "@heroicons/react/24/outline"


// const Login = () => {

//     const [nome, setNome] = useState('')
//     const [username, setUsername] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [signUpTriggered, setSignUpTriggered] = useState(false)
//     const [isLoading, setIsLoading] = useState(false)
//     const [utentiData, setUtentiData] = useState(null)
//     const [emailAlreadyExisted, setEmailAlreadyExisted] = useState(false)
//     const dispatch = useDispatch()
    
//     const [user, setUser] = useState(null)


//     // const history = useHistory()

//     const allUtentiFetch = async () => {  
//         try{
//             let response = await fetch('http://localhost:8085/utenti',
//             { headers: { Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkB0ZXN0LmNvbSIsImlhdCI6MTY4NTExNDY2MCwiZXhwIjoxNjg1NzE5NDYwfQ.Dlhjk8-eUYirog19H08Doh1063e0x4YUgyCx70QUbl8yOmjzZP-TPQuXkI-cermm' } }
//             )
//             if(response.ok) {
//                 // console.log(await response.json())
//                 const res = await response.json()
//                 setUtentiData(res)
//                 console.log(res)
                
                
//             }
//         } catch(error){
//             console.log("data: ", error)
//         }
//     }

//     useEffect(() => {
//         allUtentiFetch()  //fa il fetch di tutti gli utenti al caricamento della pagina
//     }, [])
//     useEffect(() => {
//         allUtentiFetch()  //fa il fetch di tutti gli utenti al caricamento della pagina
//         console.log(signUpTriggered)
//     }, [signUpTriggered])

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         // const utente = { nome, username, email, password }  //creo un oggetto con i dati passati nei campi del form // {nome: 'roberto', username: 'tursi' ...}
        
//         const utente = {
//           "nome": nome,
//           "username": username,
//           "email": email,
//           "password": password
//       }

//         console.log(utente)

//         setIsLoading(!isLoading)
        
//         console.log(utentiData)

//         let notAlreadyExisted = true

//         utentiData.forEach(u => {  //controlla che neanche un utente nel db abbia la stessa email che stiamo utilizzando per registrarci
//             if(u.email === email){
//                 notAlreadyExisted = false
//             } 
//         })

//         if(notAlreadyExisted){  //se la email passa il controllo allora:
//                 fetch('http://localhost:8085/api/auth/register', {  //facciamo il fetch
//                 // fetch('http://localhost:8085/utenti', {  //facciamo il fetch
//                 method: 'POST',  //dichiariamo che vogliamo fare un POST
//                 headers: { "Content-Type": "application/json",
//                           Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkB0ZXN0LmNvbSIsImlhdCI6MTY4NTExNDY2MCwiZXhwIjoxNjg1NzE5NDYwfQ.Dlhjk8-eUYirog19H08Doh1063e0x4YUgyCx70QUbl8yOmjzZP-TPQuXkI-cermm' },  //dichiariamo che il file che invieremo è in formato json
//                 body: JSON.stringify(utente)  //andiamo a trasformare il nostro oggetto in un json
//             }).then(() => {  //se il fetch va a buon fine allora:
//                 console.log('Utente aggiunto con successo')  //console.log di un messaggio di successo
//                 setIsLoading(false)   //settiamo lo state 'isLoading' a false in modo tale da sostituire lo spinner del caricamento con il bottone
//                 // window.location = '/'  //reindirizziamo l'utente alla Home
//                 // history.push('/')  //fa la stessa cosa di window.location, ma non so perché, non me lo fa importare
//             }).catch((error) => {  //se il fetch non va a buon fine allora:
//                 console.log(error)  //console.log dell'errore
//             })
//         } else {
//             setIsLoading(false) 
//             setEmailAlreadyExisted(true)
//         }

        

//     }  

    

//     // useEffect(() => {
//     //   utenteFetch()
//     // }, [user])

//     const handleLogin = async (e) => {
//       e.preventDefault()

//     //   let existed = false
//     //   utentiData.forEach(u => {  
//     //     if(u.username === username){
//     //         existed = true
//     //     } 
//     // })

//     // if(existed){
//       try{
//         let response = await fetch('http://localhost:8085/api/auth/login', {
//           method: "POST",
//           headers: { "Content-Type": "application/json"},
//           body: JSON.stringify({username, password})
//         })
//         if(response.ok) {
//           let res = await response.json()
//           dispatch({
//             type: "ADD_TOKEN",
//             payload:res.accessToken
//           })
//           dispatch({
//             type: "SHOW_LOGIN", 
//             payload: false
//           })
//           dispatch({
//             type: "SAVE_UTENTE",
//             payload: res
//           })
//           setUser(res)
//           console.log(res)
//           setUsername("")
//           setPassword("")
//         }
//       }catch(error){
//         console.log("LOGIN: ", error)
//     }
//     // } else{
//     //   window.alert("Credenziali errate")
//     // }
//     // utenteFetch()
//     }
    

//   return (

//     <div className="divForm">
//   <form onSubmit={signUpTriggered ? handleSubmit : handleLogin} className={`${signUpTriggered ? 'bg-login-2' : 'bg-login'} shadow-md rounded px-8 pt-6 pb-8 mb-4 relative`}>
//     <div onClick={() => dispatch({type: "SHOW_LOGIN", payload: false})} className='absolute icon-style-2 text-slate-500 top-[5%] right-[5%]'><XMarkIcon className=''/></div>
//     {signUpTriggered && <div className="mb-4">
//       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//         Name
//       </label>
//       <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
//       leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" 
//       placeholder="Name" value={nome} onChange={e => setNome(e.target.value)}/>
//     </div>}

//     <div className="mb-4">
//       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//         Username
//       </label>
//       <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
//       leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" 
//       placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
//     </div>
    
//     {/* LOGIN */}
//     {signUpTriggered && <div className="mb-4">
//       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//         Email
//       </label>
//         <input onFocus={() => setEmailAlreadyExisted(false)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
//       leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" 
//       placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
//       {emailAlreadyExisted && <span>Email già in uso</span>}
//     </div>}

//     <div className="mb-6">
//       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//         Password
//       </label>
//       <input required className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3
//        text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password"
//         type="password" placeholder="******************" value={password} onChange={e => setPassword(e.target.value)}/>
//       <p className="text-red-500 text-xs italic">Please choose a password.</p>
//     </div>

//     <div className="flex items-center justify-between">
//       {!isLoading && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="form">
//         Sign In
//       </button>}
//       {isLoading && <button disabled className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="form">
//       <li className="flex items-center">
//         <div role="status">
//             <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
//             <span className="sr-only">Loading...</span>
//         </div>
//         Preparing your file
//     </li>
//       </button>}
//       <span onClick={() => setSignUpTriggered(!signUpTriggered)} 
//       className="cursor-pointer inline-block align-baseline font-bold text-sm text-blue-500 
//       hover:text-blue-800">
//         {!signUpTriggered ? `Non sei registrato?` : `Sei già registrato?`}
//       </span>
//     </div>
//   </form>
// </div>

     

//   )
// }

// export default Login