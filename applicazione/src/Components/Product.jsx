import { PlusIcon } from "@heroicons/react/24/solid"
import AccessoriCard from './AccessoriCard'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const Product = () => {

    const [plusTriggered, setPlusTriggered] = useState(false)

    const [idAttrezzoData, setIdAttrezzoData] = useState(null)
    const [accessoriData, setAccessoriData] = useState(null)
    const cart = useSelector((state) => state.cart)
    const carrello = useSelector((state) => state.carrello)
    let tokenStorage = sessionStorage.getItem('token')

    const dispatch = useDispatch()

    let token = useSelector((state) => state.token)

    const {id} = useParams()

    

    useEffect(() => {
        idProductsFetch()
        accessoriFetch()
    }, [id, token])

    const idProductsFetch = async () => {
        try{
            let response = await fetch(`http://localhost:8085/attrezzi/id/${id}`
            //,{ headers: { Authorization: `Bearer ${tokenStorage}`} }
            )
            if(response.ok) {
                let res = await response.json()
                setIdAttrezzoData(res)
                dispatch({
                    type: "CHANGE_CART",
                    payload: res.prezzo
                })
                
            }
        } catch(error){
            console.log("IdAttrezzo data: ", error)
        }
    }

    const accessoriFetch = async () => {
        try{
            let response = await fetch(`http://localhost:8085/attrezzi/tipoAttrezzo/ACCESSORI`
            //,{ headers: { Authorization: `Bearer ${tokenStorage}`} }
            )
            if(response.ok) {
                let res = await response.json()
                setAccessoriData(res)
                console.log(res)
                
            }
        } catch(error){
            console.log("IdAttrezzo data: ", error)
        }
    }

    let img = idAttrezzoData?.img
    let attrezzoImg = "/src/assets/" + idAttrezzoData?.tipoAttrezzo + "/" + img 


    const sendToCart = () => {
        if(!carrello.find(obj => obj.id === idAttrezzoData.id)){
            dispatch({
                type: "SEND_TO_CART",
                payload: idAttrezzoData
            }) 
            dispatch({
                type: "ADD_TO_UNIQUE_CARRELLO",
                payload: idAttrezzoData
                
            })
        }
        // if(carrello.find(obj => obj.id === id)){
        //     setIsChecked(true)
        // } else{
        //     setIsChecked(false)
        // }
    
    }

  return (
        <>
             <div className='grid-container p-10 md:p-0 md:pb-7 sm:flex flex-col'>
             {idAttrezzoData && <div className="flex flex-col items-center rounded-md">
                        <img className="w-5/6 md:h-3/5 md:mb-6" src={attrezzoImg} alt="" />
                    </div>}
                    {idAttrezzoData && <div>
                        <h1 className="text-4xl font-semibold md:text-2xl">{idAttrezzoData.nome}</h1>
                        <h3 className="mt-2 text-slate-600 font-semibold text-lg md:text-base">{idAttrezzoData.sottotitolo}</h3>
                        <p className="text-sm text-slate-600 my-6 md:hidden">{idAttrezzoData.descrizione} {idAttrezzoData.descrizione2}</p>
                        <div className="flex items-center">
                            <PlusIcon className="icon-style-2 " onClick={() => {setPlusTriggered(!plusTriggered)}}/>
                            <h2 className="ml-2 font-semibold text-lg">Scegli Accessori</h2>
                        </div>
                        {plusTriggered && <div>
                            {accessoriData?.map((attrezzo, i) => (
                                <AccessoriCard ifProduct {...attrezzo} key={i}/>
                            ))}
                        </div>
                            
                        }
                    </div>}
                </div>
                <div className=" sticky bottom-0 flex justify-around p-2 items-center mx-10 md:mx-0">
                    {/* <span className="text-2xl text-slate-900 md:text-lg ">{cart}€</span> */}
                   
                        {/* <button type="button" 
                        onClick={sendToCart}
                            className="text-slate-100 bg-black p-4 rounded-md font-bold hover:bg-slate-700 transition-all duration-800 "
                        >AGGIUNGI AL CARRELLO</button> */}
                    
                    <Link to={"/carrello"}>
                        <button type="button" 
                        onClick={sendToCart}
                            className="text-slate-100 bg-black p-4 rounded-md font-bold hover:bg-slate-700 transition-all duration-800 md:text-xs md:p-2"
                        >AGGIUNGI AL CARRELLO</button>
                    </Link>
                </div>
        </>
  )
}

export default Product