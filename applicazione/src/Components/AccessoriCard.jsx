import { useEffect, useState } from 'react'
import { ChevronDownIcon, XMarkIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { truncate } from 'lodash'

const AccessoriCard = ({ ifProduct ,ifCheckout, ifCarrello, attrezzo, id, nome, img, prezzo, descrizione, descrizione2, tipoAttrezzo }) => {

    const [isChecked, setIsChecked] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const carrello = useSelector((state) => state.carrello)
    const [showOptions, setShowOptions] = useState(false)
    const [number, setNumber] = useState(1)
    const [inputTriggered, setInputTriggered] = useState()
    const [selectedNumber, setSelectedNumber] = useState(1)
    const [finalDescrizione, setFinalDescrizione] = useState(descrizione + descrizione2)

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
            dispatch({
                type: "ADD_TO_UNIQUE_CARRELLO",
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
            dispatch({
                type: "REMOVE_FROM_UNIQUE_CARRELLO",
                payload: id
                
            })

        }
        setIsChecked(!isChecked)
    }

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id
            
        })
        dispatch({
            type: "REMOVE_FROM_UNIQUE_CARRELLO",
            payload: id
            
        })

        if(carrello.length === 1){
            navigate("/products");
        }
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
    

    const changeQuantity = (e) => {
        setSelectedNumber(e.target.innerText)
        let n = e.target.innerText
        
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id
        })
        for(let i=0; i<n; i++){
            dispatch({
                type: "SEND_TO_CART",
                payload: {id, nome, img, prezzo, descrizione, descrizione2, tipoAttrezzo}
                
            })
        }
        setShowOptions(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNumber(selectedNumber)
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id
        })
        for(let i=0; i<selectedNumber; i++){
            dispatch({
                type: "SEND_TO_CART",
                payload: {id, nome, img, prezzo, descrizione, descrizione2, tipoAttrezzo}
                
            })
        }
        setShowOptions(false)
        setInputTriggered(false)
    }

  return (
    <div className={`${ifProduct ? 'md:flex md:justify-around' : ''} ${setGridStyle()}`}>
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
        <img className={`${ifProduct ? 'md:max-w-[15%]' : ''}`} src={setImg()} alt="accessorio/img" />
        <div className='ml-4'>
            <h4 className={`${ifCarrello ? 'text-2xl xl:text-xl lg:text-lg md:text-sm' : 'text-lg'} ${ifProduct ? 'md:text-xs' : '' } text-slate-900 font-semibold`}>{nome}</h4>
            {!ifCheckout && <p className={`${ifCarrello ? 'text-lg xl:text-lg' : '' } lg:hidden text-slate-500`}>{truncate(finalDescrizione, {length:125})}</p>}
            {/* {!ifCheckout && <p className={`${ifCarrello ? 'text-lg xl:text-lg' : '' } lg:hidden text-slate-500`}>{truncate(descrizione, {length:175})} truncate(descrizione2, {length:175})}</p>} */}
            {ifProduct && <a className='text-md text-slate-600 md:hidden' href="#">Ulteriori dettagli</a>}
        </div>
        <span className= {`${ifCarrello ? 'text-xl xl:text-xl lg:text-lg md:text-center md:text-sm' : 'justify-self-center'} ${ifProduct ? 'md:text-sm' : '' } bg-white p-4 items-center font-bold text-slate-950`}>{prezzo}€</span>
        {ifCarrello && <>
        {!inputTriggered ? <div className='select-quantity-button relative'>
            <span>{selectedNumber}</span>
            {!showOptions ? 
            <ChevronDownIcon onClick={() => setShowOptions(!showOptions)} className='icon-style-2'/> 
            :
            <ChevronUpIcon onClick={() => setShowOptions(!showOptions)} className='icon-style-2'/>
        }
            {showOptions && <div className='scrolled-options bg-slate-100 absolute flex flex-col w-full top-[100%] left-0 rounded-md'>
            <div onClick={(e) => changeQuantity(e)} className='options-style px-1 hover:bg-slate-500 hover:text-slate-50 rounded-t-md'>1</div>
            <div onClick={(e) => changeQuantity(e)} className='options-style px-1 hover:bg-slate-500 hover:text-slate-50'>2</div>
            <div onClick={(e) => changeQuantity(e)} className='options-style px-1 hover:bg-slate-500 hover:text-slate-50'>3</div>
            <div onClick={(e) => changeQuantity(e)} className='options-style px-1 hover:bg-slate-500 hover:text-slate-50'>4</div>
            <div onClick={(e) => changeQuantity(e)} className='options-style px-1 hover:bg-slate-500 hover:text-slate-50'>5</div>
            <div onClick={() => setInputTriggered(true)} className='px-1 hover:bg-slate-500 hover:text-slate-50 rounded-b-md'>altro</div>
        </div>}
        </div> 
        :
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    autoFocus 
                    onBlur={() => setInputTriggered(false)} 
                    className='select-quantity-button md:max-w-[120px] sm:max-w-[80px] xsm:max-w-[40px]' 
                    placeholder='scegli quantità' 
                    value={selectedNumber} onChange={e => setSelectedNumber(e.target.value)}
                />
            </div>
            
        </form>}
        
        <div><XMarkIcon onClick={removeFromCart} className='icon-style-2 ml-5'/></div>
        </>}
        {/* {ifCarrello && <>
        <div className='select-quantity-button'>
            <span>1</span>
            <ChevronDownIcon className='icon-style-2'/>
        </div>
        <div><XMarkIcon onClick={removeFromCart} className='icon-style-2 ml-5'/></div>
        </>} */}
    </div>
  )
//   <select className="mt-4 bg-slate-200 p-6 shadow appearance-none border rounded w-full px-3 text-gray-700 
//   leading-tight focus:outline-none focus:shadow-outline" name="provincia" id="provincia" form="provinciaform">
        
//       <option value={null} >Stato/provincia * </option>
//       {province?.map((provincia, i) => (
          
//           <option key={i} value={provincia.substring(0, provincia.length - 3)}>{provincia.substring(0, provincia.length - 3)}</option>
//       ))}
   
//   </select>
}

export default AccessoriCard