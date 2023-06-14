import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react"
import { useState } from "react"
import Card from "./Card"


const NavBarMenu = () => {

  const dispatch = useDispatch()
  const sidebar = useSelector((state) => state.sidebar)
  const searchBar = useSelector((state) => state.searchBar)
  const allProductsFetch = useSelector((state) => state.allProducts)
  const [filteredProducts, setFilteredProducts] = useState(null)
  
    
  const menuOpen = (el) => {
    dispatch({type: "SHOW_MENU"}) 
    dispatch({type: el})
}

useEffect(() => {
  searchFetch()
}, [])

  const searchFetch = async () => {
    if(allProductsFetch === null){
      try{
        let response = await fetch(
            `http://localhost:8085/attrezzi`
            )
        if(response.ok) {
            let res = await response.json()
            dispatch({
              type: "DISPATCH_ALL_ATTREZZI",
              payload: res
            })
            console.log(res)
            
        }
    } catch(error){
        console.log("data: ", error)
    }
    } 
  }

  const findAttrezzo = (e) => {
     
    setFilteredProducts(allProductsFetch.filter((obj) => obj.nome.includes(e.target.value)))

  }

  return (
    // <div onClick={() => dispatch({type:"SHOW_MENU"})} className={`${!searchBar ? 'p-5' : ''}  right-0 bg-black w-full h-screen`}>
      <div className={`${!searchBar ? 'p-5' : ''}  right-0 bg-black w-full h-screen`}> 
        {sidebar && <ul className="flex flex-col">
            <li className='list-item-menu-nb' >Tapis Roulant</li>
            <li className='list-item-menu-nb' >Bike</li>
            <li className='list-item-menu-nb' >Ellittiche</li>
            <li className='list-item-menu-nb' >Vogatore</li>
            <li className='list-item-menu-nb' >Forza</li>
            <li className='list-item-menu-nb' >Accessori</li>
            <li className='list-item-menu-nb' >Home Gym</li>
            <Link to="products" onClick={() => menuOpen("SHOW_SIDEBAR")} className='list-item-menu-nb'><li>Tutti i prodotti</li></Link>
            
        </ul>}
        {searchBar && <div className='div-search-bar'>
        <p className="text-slate-100 text-5xl border-b-2 border-white border-l-2 mb-5 pl-4">Cosa stai cercando?</p>
        <form className="relative">
          <MagnifyingGlassIcon className="absolute left-[1.5%] top-[25%] icon-style"/>
          <input className="input-search-bar" type="text" placeholder="Cerca" onChange={(e) => findAttrezzo(e)}/> 
          <XMarkIcon onClick={() => menuOpen("SHOW_SEARCH")} className="absolute right-[2%] top-[25%] icon-style"/> 
        </form>
    </div>
}
    <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 bg-black">
        {searchBar && filteredProducts?.map((attrezzo, index) => (
          <Card {...attrezzo} attrezzo key={index}/>
        )) }
    </div>
  
    </div>
  )
}

export default NavBarMenu