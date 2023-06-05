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
    let tokenStorage = sessionStorage.getItem('token')
    const utenteInfo = useSelector((state) => state.utenteInfo)
    const login = useSelector((state) => state.login)
    //const sessionStorage = window.sessionStorage

    const calcSubtotale = () => {
        let subtotale = 0
        for(let i=0; i<carrello.length; i++){
            subtotale += carrello[i].prezzo
        }
        console.log(subtotale)
        return subtotale
    }

    const utenteFetch = async () => {
       
        try{
          let response = await fetch(`http://localhost:8085/utenti/username/${utente.username}`,
          { headers: { Authorization: `Bearer ${tokenStorage}`} }
          )
          if(response.ok) {
            let res = await response.json()
            dispatch({
              type: "ADD_UTENTE_INFO",
              payload:res
            })
           
            // sessionStorage.setItem('utenteId', res.id)
            // sessionStorage.setItem('utenteNome', res.nome)
            // sessionStorage.setItem('utenteUsername', res.username)
            // sessionStorage.setItem('utenteEmail', res.email) 
            // sessionStorage.setItem('utentePassword', res.password) 
            // sessionStorage.setItem('utenteListaOrdini', res.lista_ordini) 
            // sessionStorage.setItem('utenteRoles', res.roles) 
            // console.log(res)
  
          }
        }catch(error){
          console.log("UtenteInfo: ", error)
      }
      }

    useEffect(() => {
        calcSubtotale()
        utenteFetch()
    }, [])
    useEffect(() => {
        calcSubtotale()
    }, [carrello])

    useEffect(() => {
        utenteFetch()
    }, [login])

  return (
    <>
        <h1 className='text-5xl font-bold mb-6'>Carrello</h1>
        <div className='grid-container-4 '>
            <div className='mr-7'>
                <div className='grid-container-3 bg-white py-4 rounded-t-md'>
                    <span></span>
                    <span className='text-slate-500 ml-4'>Nome del prodotto</span>
                    <span className='text-slate-500 ml-4'>Prezzo</span>
                    <span className='text-slate-500 ml-4'>Qtà</span>
                    <span></span>
                </div>
                <div>
                    {carrello?.map((attrezzo, index) => (
                        <AccessoriCard ifCarrello {...attrezzo} key={index}/>
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
                
                <button onClick={() => dispatch({type: "SHOW_LOGIN", payload: true})} className='checkout-button'>
                    PROCEDI AL CHECKOUT
                </button>
                
                }

                
            </div>
        </div>
    </>
  )
}

export default Carrello