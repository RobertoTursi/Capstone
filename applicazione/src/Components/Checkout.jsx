import CheckoutForm from './CheckoutForm'
import AccessoriCard from './AccessoriCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {

    const carrello = useSelector((state) => state.carrello)
    const uniqueCarrello = useSelector((state) => state.uniqueCarrello)
    const token = useSelector((state) => state.token)
    const utenteInfo = useSelector((state) => state.utenteInfo)
    let tokenStorage = sessionStorage.getItem('token')
    let listaAttrezzi = []
    const tot = useSelector((state) => state.tot)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [disableButton, setDisableButton] = useState()

    const addToListaAttrezzi = () => {
        carrello.map((attrezzo) => (
            listaAttrezzi.push(
                {
                    "id": attrezzo.id,
                    "nome": attrezzo.nome,
                    "sottotitolo": attrezzo.sottotitolo,
                    "descrizione": attrezzo.descrizione,
                    "descrizione2": attrezzo.descrizione2,
                    "prezzo": attrezzo.prezzo,
                    "tipoAttrezzo": attrezzo.tipoAttrezzo,
                    "img": attrezzo.img
                }
            )
        ))
    }

    useEffect(() => {
        addToListaAttrezzi()
        console.log(listaAttrezzi)
        if(carrello.length > 0){
            setDisableButton(false)
        } else{
            setDisableButton(true)
        }
    }, [])

    let user = {
        "id": utenteInfo.id,
        "nome": utenteInfo.nome,
        "username": utenteInfo.username,
        "email": utenteInfo.email,
        "password": utenteInfo.password,
        "lista_ordini": utenteInfo.lista_ordini,
        "roles": utenteInfo.roles
    }


    let newOrdine = null
    const orderConfirm = async () => {
        
        // console.log("ordine", ordine)
        //console.log(user)
        try{
            let response = await fetch('http://localhost:8085/ordini', {
              method: "POST",
              headers: { "Content-Type": "application/json",
                Authorization: `Bearer ${token}`},
              body: JSON.stringify({listaAttrezzi})
            })
            if(response.ok) {
              let res = await response.json()
              console.log(res)
              newOrdine = res
              console.log("newOrdine:", newOrdine.listaAttrezzi)
            }
          }catch(error){
            console.log("LOGIN: ", error)
        }

        //user.lista_ordini.push(newOrdine)
        // carrello.map((attrezzo) => (
        //     newOrdine.listaAttrezzi.push(attrezzo)
        // ))

        
        // newOrdine.listaAttrezzi = []
        // carrello.map((attrezzo) => (
        //     newOrdine.listaAttrezzi.push(attrezzo)
        // ))

        console.log(newOrdine)

        user.lista_ordini.push(newOrdine)

        utentePut()
    }
    
    const clearCarrello = () => {
        dispatch({
            type: "CLEAR_CARRELLO"
            })
        dispatch({
            type: "CLEAR_UNIQUE_CARRELLO"
            })
          dispatch({
            type: "ADD_TOTAL",
            payload: 0
            })
          dispatch({
            type: "CHANGE_CART",
            payload: null
            })
    }

    const utentePut = async () => {
        try{
            let response = await fetch(`http://localhost:8085/utenti/${utenteInfo.id}`, {
              //mode: "no-cors",
              method: "PUT",
              headers: { "Content-Type": "application/json",
              Authorization: `Bearer ${token}`},
              body: JSON.stringify(user)
            })
            if(response.ok) {
              let res = await response.json()
              console.log(res)
              clearCarrello()
                navigate('/order-confirmed')
            }
          }catch(error){
            console.log("LOGIN: ", error)
            console.log(user)
        }
    }

  return (
    <>
        <h1  className='text-slate-900 font-bold text-3xl mb-7'>Checkout</h1>
        <div className='grid-container-5 lg:flex lg:flex-col'>
            <div className='bg-white rounded-md p-7'>
                <h4 className='text-slate-900 font-bold text-lg'>1. Dati spedizione</h4>
                {!token &&<CheckoutForm />}
                {token && utenteInfo && <div>
                        <span className='block'>Nome: {utenteInfo.nome}</span>
                        <span className='block'>Email: {utenteInfo.email}</span>
                        <span className='block'>Username: {utenteInfo.username}</span>
                    </div>}
            </div>
            <div className=' bg-white rounded-md p-7'>
               <div className='yellow-borded-div-3 pt-0 pb-5'> <h4 className='text-slate-900 font-bold text-lg pt-0'>2. Metodo di pagamento</h4></div>
                
               <form action="">
                    <fieldset>
                        <div className='yellow-borded-div-2 flex '>
                            <input className='mr-4' id='0' type="radio" name="payment" value="credit_card"/>
                            <img className='mr-4 icon-style' src="/src/assets/credit-card.png" alt="/src/credit-card" />
                            Carta di credito/debito
                        </div>
                        
                        <div className='yellow-borded-div-2 flex '>
                            <input className='mr-4' id='1' type="radio" name="payment" value="paypal"/>
                            <img className='mr-4 icon-style' src="/src/assets/paypal.png" alt="src/paypal" />
                            PayPal
                        </div>
                    </fieldset>
                </form>


                {/* <form>
                    <fieldset>
                    <div className='yellow-borded-div-2 flex '>
                        <input type="radio" className='mr-4' id="1" name="Carta di credito/debito" value="Carta di credito/debito"></input>
                        <img className='mr-4 icon-style' src="/src/assets/credit-card.png" alt="/src/credit-card" />
                        <label htmlFor="Carta di credito/debito">Carta di credito/debito</label>
                        <input type="radio" className='mr-4' id="2" name="PayPal" value="PayPal"></input>
                        <img className='mr-4 icon-style' src="/src/assets/paypal.png" alt="src/paypal" />
                        <label htmlFor="PayPal">PayPal</label>
                    </div>
                    </fieldset>
                   
                </form> */}
            </div>
            <div className='bg-white rounded-md p-7'>
                <h4 className='text-slate-900 font-bold text-lg yellow-borded-div-3 pb-5'>3. Rivedi il tuo ordine</h4>
                <div className='scrolled-box'>
                    {carrello?.map((attrezzo, i) => (
                        <AccessoriCard ifCheckout {...attrezzo} key={i} />
                    ))}
                </div>
                <div className='yellow-borded-div items-center'>
                    <span>Subtotale(4 prodotti)</span>  {/* rendere dinamico */}
                    <span className='font-bold pr-4 '>{tot}€</span>   {/* rendere dinamico */}
                </div>
                <div className='yellow-borded-div items-center'>
                    <span>Spedizione e montaggio</span>
                    <span className='font-bold pr-4'> incluso</span>
                </div>
                <div className='flex justify-between py-5 items-center'>
                    <span className='font-bold '>Totale imposte incluse</span>
                    <span className='font-bold pr-4' >{tot}€</span> {/* rendere dinamico */}
                </div>
            </div>

            <div></div>
            <div></div>
            {!disableButton? 
            <button
                type='button'
                className='button-style p-2 border-white border-2 text-white font-bold' 
                onClick={orderConfirm}>
                    Conferma ordine
                </button>
            :
            <button
                type='button'
                className='button-style p-2 border-white border-2 text-white font-bold'
                onClick={navigate('/products')}>
                    Torna allo store
                </button>
            }
                 
            
        </div>
    
    </>
  )
}

export default Checkout

