import { useEffect, useState } from 'react'
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from 'react-redux'

const AccessoriCard = ({ ifProduct ,ifCheckout, ifCarrello, id, nome, img, prezzo, descrizione, descrizione2, tipoAttrezzo }) => {

    const [isChecked, setIsChecked] = useState(false)

    const dispatch = useDispatch()
    const carrello = useSelector((state) => state.carrello)

    const handleOnChange = () => {
        if(!isChecked){
            dispatch({
                type: "ADD_TO_CART",
                payload: prezzo
            })
            dispatch({
                type: "SEND_TO_CART",
                payload: {id, nome, img, prezzo, descrizione, descrizione2, tipoAttrezzo}
                
            })
        } else{
            dispatch({
                type: "ADD_TO_CART",
                payload: - prezzo
            })
            dispatch({
                type: "REMOVE_FROM_CART",
                payload: id
                
            })
        }
        setIsChecked(!isChecked)
    }


    useEffect(() => {
        if(carrello.length>0){
            if(carrello.find(obj => obj.id === id)){
                setIsChecked(true)
            } else{
                setIsChecked(false)
            }
        }
        
    }, [carrello])

    let img2 = img
    let accessorioImg
    const setImg = () => {
        if(ifProduct || ifCarrello || ifCheckout){
            
            accessorioImg = "/src/assets/" + tipoAttrezzo + "/" + img2 
        }else{
            accessorioImg = img
        }
        return accessorioImg
    }

    const setGridStyle = () => {
        if(ifCarrello){
            return 'grid-container-3 bg-white p-4 items-center'
        } else if(ifProduct){
            return 'grid-container-2 my-4 rounded-md bg-white p-4 items-center'
        } else if(ifCheckout){
            return 'grid-container-6 bg-white py-4 items-center yellow-borded-div-2'
        }
    }
    

  return (
    <div className={setGridStyle()}>
    {/* <div className={`${ifCarrello ? 'grid-container-3 my-[1px]' : 'grid-container-2 my-4 rounded-md '} bg-white p-4 items-center`}> */}
        {ifProduct && <input
            className='mr-5' 
            type='checkbox'
            id={nome}
            name={nome}
            value={nome}
            checked={isChecked}
            onChange={handleOnChange}
            
        />}
        <img src={setImg()} alt="accessorio/img" />
        <div className='ml-4'>
            <h4 className='text-slate-900 font-semibold text-lg'>{nome}</h4>
            <p className='text-slate-500'>{descrizione} {descrizione2}</p>
            {ifProduct && <a className='text-md text-slate-600' href="#">Ulteriori dettagli</a>}
        </div>
        <span className= {`${ifCarrello ? '' : 'justify-self-center'} bg-white p-4 items-center font-bold text-slate-950`}>{prezzo}€</span>
        {ifCarrello && <>
        <div className='select-quantity-button'>
            <span>1</span>
            <ChevronDownIcon className='icon-style-2'/>
        </div>
        <div><XMarkIcon className='icon-style-2 ml-5'/></div>
        </>}
    </div>
  )
}

export default AccessoriCard