import AccessoriCard from './AccessoriCard'
import { PlusIcon } from "@heroicons/react/24/outline"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Carrello = () => {

    const carrello = useSelector((state) => state.carrello)
    const dispatch = useDispatch()
    const utente = useSelector((state) => state.utente)
    let token = useSelector((state) => state.token)
    const utenteInfo = useSelector((state) => state.utenteInfo)
    const login = useSelector((state) => state.login)
    const uniqueCarrello = useSelector((state) => state.uniqueCarrello)
    //const sessionStorage = window.sessionStorage

    const calcSubtotale = () => {
        let subtotale = 0
        for(let i=0; i<carrello.length; i++){
            subtotale += carrello[i].prezzo
        }
        console.log(subtotale)
        dispatch({
            type: "ADD_TOTAL",
            payload: subtotale
        })
        return subtotale
    }

    const utenteFetch = async () => {
       
        try{
          let response = await fetch(`http://localhost:8085/utenti/username/${utente.username}`,
          { headers: { Authorization: `Bearer ${token}`} }
          )
          if(response.ok) {
            let res = await response.json()
            dispatch({
              type: "ADD_UTENTE_INFO",
              payload:res
            })
  
          }
        }catch(error){
          console.log("UtenteInfo: ", error)
      }
      }

    //   const checkUniqueCarrello = (array) => {
    //     for(let i=0; i<carrello.length; i++){
    //         if(!array.includes(carrello[i])){
    //             array.push(carrello[i])
    //         }else{
    //             array.push("ciao")
    //         }
    //     }
    //     return array
    //   }

    useEffect(() => {
        calcSubtotale()
        utenteFetch()
        // setUniqueCarrello(carrello)
        // setUniqueCarrello([...new Set(carrello)])
        console.log("uniquw: ",uniqueCarrello)
    }, [])
    useEffect(() => {
        calcSubtotale()
        // setUniqueCarrello((uniqueCarrello) => checkUniqueCarrello(uniqueCarrello))
        // setUniqueCarrello([...new Set(carrello)])
        console.log("uniquw: ",uniqueCarrello)
    }, [carrello])

    useEffect(() => {
        utenteFetch()
    }, [login])


    

  return (
    <>
        <h1 className='text-5xl font-bold mb-6'>Carrello</h1>
            <div className='grid-container-4 md:flex md:flex-col'>
            <div className='mr-7 md:mr-0 md:mb-6'>
                <div className='grid-container-3 bg-white p-4 rounded-t-md'>
                    <span></span>
                    <span className='text-slate-500 ml-4'>Nome del prodotto</span>
                    <span className='text-slate-500 ml-4 md:text-center'>Prezzo</span>
                    <span className='text-slate-500 ml-4'>Qtà</span>
                    <span></span>
                </div>
                <div className=''>
                    {carrello && uniqueCarrello?.map((attrezzo, index) => (
                        
                        <AccessoriCard ifCarrello {...attrezzo} attrezzo key={index}/>
                    ))}
                </div>
            </div>
            <div>
                <div className='bg-white p-5 pt-0 rounded-md'>
                    <div className='yellow-borded-div'>
                        <h4 className='text-xl font-bold'>Sommario</h4>
                    </div>
                    <div className='yellow-borded-div'>
                        <span>Hai un codice promozionale?</span>
                        <span><PlusIcon className='icon-style-2' /></span>
                    </div>
                    <div className='yellow-borded-div'>
                        <span>Subtotale({carrello.length})</span>  {/* rendere dinamico */}
                        <span className='font-bold '>{calcSubtotale()}€</span>   {/* rendere dinamico */}
                    </div>
                    <div className='yellow-borded-div'>
                        <span>Spedizione e montaggio</span>
                        <span className='font-bold'> incluso</span>
                    </div>
                    <div className='flex justify-between py-5'>
                        <span className='font-bold '>Totale imposte incluse</span>
                        <span className='font-bold' >{calcSubtotale()}€</span> {/* rendere dinamico */}
                    </div>
                    
                </div>
                {utenteInfo ? 
                <Link to={'/checkout'}>
                    <button className='checkout-button'>
                        PROCEDI AL CHECKOUT
                    </button>
                </Link> : 
                
                <button type='button' onClick={() => dispatch({type: "SHOW_LOGIN", payload: true})} className='checkout-button'>
                    PROCEDI AL CHECKOUT
                </button>
                }
                

                
            </div>
        </div>
    </>
  )
}

export default Carrello