import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Card = ({ ifExists, id, nome, img, prezzo, tipoAttrezzo }) => {

  const [colorChanged, setColorChanged] = useState(false)
  const [buttonChanged, setButtonChanged] = useState(false)
  const searchBar = useSelector((state) => state.searchBar)
  const dispatch = useDispatch()


  let img2 = img
  img = "/src/assets/" + tipoAttrezzo + "/" + img2 

  return (
    <div onMouseLeave={() => setColorChanged(false)} onMouseOver={() => setColorChanged(true)} 
    className= {`${!ifExists ? 
    `${!colorChanged ? "card-gradient" : "card-hover"} ${!searchBar ? "card-gradient" : "search-card-gradient"} flex flex-col items-center m-3 rounded-md p-2 pb-[2rem]` : 
    'grid-container-7 text-center lg:justify-center m-3 rounded-md p-4 bg-white items-center w-3/5 md:w-full'}`}>

    
      <img src={img} alt="/attrezzo/img" className={`${!ifExists ? "w-[70%]" : "" }`}/>
      <h4 className= {`${!ifExists ? "text-lg mt-[2.75rem]" : "text-3xl lg:text-2xl sm:text-sm" } text-slate-950 font-bold`}>{nome}</h4>
      <span className={`${!ifExists ? "" : "font-bold lg:text-2xl sm:text-base text-3xl" } text-slate-600 block font-bold`}>{prezzo}€</span>
      
      <Link onClick={() => {if(searchBar){dispatch({type:"SHOW_SEARCH"}); dispatch({type: "SHOW_MENU"}) }}} to={`/product/${id}`}>
      {/* <Link to={`${!ifExists ? `ShowProducts/${tipoAttrezzo}` : `products/${id}`}`}> */}
        
        <button onClick={() => setButtonChanged(true)} className=  {`${ifExists ? "sm:w[80%] sm:text-xs w-[70%] m-0 lg:ml-2 lg:w-full" : "mt-5 text-sm"} ${buttonChanged ? "bg-white scale-110 transition-all duration-300" : ""} bg-black text-slate-100 border rounded-md p-2 font-bold`} type='button'>SCOPRI</button> 
        
      </Link>
      
    </div>
    
  )
}

export default Card
