import { MagnifyingGlassIcon, ShoppingCartIcon, ArrowRightOnRectangleIcon, Bars3Icon, XMarkIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import NavBarMenu from "./NavBarMenu"
import { useRef, useState } from "react"

const NavBar = () => {

    // const [index, setIndex] = useState(null)
    // const [liMouseLeave, setLiMouseLeave] = useState(false)
    // const [divMouseLeave, setDivMouseLeave] = useState(false)

    const dispatch = useDispatch()
    const index = useSelector((state) => state.index)
    const loginState = useSelector((state) => state.login)
    const menuShower = useSelector((state) => state.menu)
    const ghostList = useRef()
    const ghostDiv = useRef()
    const searchBar = useSelector((state) => state.searchBar)
    const sidebar = useSelector((state) => state.sidebar)
    const token = useSelector((state) => state.token)
    const [showLoginInfo, setShowLoginInfo] = useState(false)
    const [showLogoutInfo, setShowLogoutInfo] = useState(false)
    const [showCercaInfo, setShowCercaInfo] = useState(false)
    const [showCarrelloInfo, setShowCarrelloInfo] = useState(false)
    const [showMenuInfo , setShowMenuInfo]= useState(false)
   

    const ghostMenu = [
        [],
        ["Technogym Run", "Technogym MyRun", "Run Personal"],
        ["Technogym Ride", "Technogym Bike", "Technogym Cycle", "Bike Personal", "Recline Personal", "My Cycling"],
        ["Technogym Elliptical", "Cross Personal"],
        ["Palestre Multifunzione", "Pesi liberi", "Panche", "Racks", "Carico selezionabile", "Plate Loaded", "Cable Station"],
        ["Wellness Ball Active Sitting", "Exercise Mat", "Elastic bands", "Loop bands", "Foam roller"],
        ["Cardio", "Forza", "Funzionale e Flessibilità"]
    ]

    const menuTriggered = (e) => {
        let divClassName = e.target.className
        let index = null
    if(divClassName.includes("li0")){
        index = 1
    } else if(divClassName.includes("li1")){
        index = 2
    } else if(divClassName.includes("li2")){
        index = 3
    } else if(divClassName.includes("li3")){
        index = 4
    } else if(divClassName.includes("li4")){
        index = 5
    } else if(divClassName.includes("li5")){
        index = 6
    } else {
        index = null
    }
    return index
    }


    const checkTarget = (e) => {
        for(let i=0; i<ghostMenu.length; i++){
            if(ghostMenu[i].includes(e.relatedTarget.innerText)){
                return true
            }
        }
    }


    const checkIndex = (e) => {
        const target = e.relatedTarget

        if(target === ghostList.current || target === ghostDiv.current || checkTarget(e)){
            console.log("ciao")
        }else{
            dispatch({
                type:"SET_INDEX",
                payload: null
            })
            
        }
      
    }

    const menuOpen = (el) => {
        dispatch({type: "SHOW_MENU"}) 
        dispatch({type: el})
    }

    const showInfo = (target, bool) => {
        if(target === "Login"){
            setShowLoginInfo(bool)
        } else if(target === "Logout"){
            setShowLogoutInfo(bool)
        } else if(target === "Cerca"){
            setShowCercaInfo(bool)
        } else if(target === "Carrello"){
            setShowCarrelloInfo(bool)
        } else if(target === "Menu"){
            setShowMenuInfo(bool)
        }
    }

    const showLogin = () => {
        dispatch({type: "SHOW_LOGIN", payload: true})
        setShowLoginInfo(false)
    }
    const showLogout = () => {
        dispatch({type: "LOGOUT"})
        setShowLogoutInfo(false)
    }
    const showCerca = () => {
        menuOpen("SHOW_SEARCH")
        setShowCercaInfo(false)
    }
    const showMenu = () => {
        menuOpen("SHOW_SIDEBAR")
        setShowMenuInfo(false)
    }
    

  return (
    <>
    {/* <Link to="/" className={`nav-Link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>*/}
        <div className={`${loginState ? 'blocked' : ''} ${menuShower ? 'flex-col' : ''} flex justify-around relative bg-black lg:justify-between lg:px-4`}  >
        {sidebar &&<div className="flex justify-end"><XMarkIcon onClick={() => menuOpen("SHOW_SIDEBAR")} className="icon-style-3 my-3 mr-4"/></div>}
            {!menuShower ? <> <div className='logo h-20 w-36'></div>
            <ul className='flex justify-around flex-row items-center'>
                <div onMouseOut={(e) => checkIndex(e)} onMouseOver={(e) => dispatch({type: "SET_INDEX", payload: menuTriggered(e)}) }  className="lg:hidden list_item_div li0">
                    <li className='list_item li0'>Tapis Roulant</li>
                </div>
                {/* <div onMouseLeave={{(e) => dispatch({type: "SET_INDEX", payload: menuTriggered(e)}) }} onMouseOver={(e) => dispatch({type: "SET_INDEX", payload: menuTriggered(e)})  className="lg:hidden list_item_div li0">
                    <li className='list_item li0'>Tapis Roulant</li>
                </div> */}
                <div onMouseOut={(e) => checkIndex(e)} onMouseOver={(e) => dispatch({type: "SET_INDEX", payload: menuTriggered(e)})} className="lg:hidden list_item_div li1">
                    <li className='list_item li1'>Bike</li>
                </div>
                <div onMouseOut={(e) => checkIndex(e)} onMouseOver={(e) => dispatch({type: "SET_INDEX", payload: menuTriggered(e)}) }className="lg:hidden list_item_div li2">
                    <li className='list_item li2'>Ellittiche</li>
                </div>
                <div className="list_item_div lg:hidden">
                    <li className='list_item'>Vogatore</li>
                </div>
                <div onMouseOut={(e) => checkIndex(e)} onMouseOver={(e) => dispatch({type: "SET_INDEX", payload: menuTriggered(e)}) }className="lg:hidden list_item_div li3">
                    <li className='list_item li3'>Forza</li>
                </div>
                <div onMouseOut={(e) => checkIndex(e)} onMouseOver={(e) => dispatch({type: "SET_INDEX", payload: menuTriggered(e)}) }className="lg:hidden list_item_div li4">
                    <li className='list_item li4'>Accessori</li>
                </div>
                <div className="list_item_div lg:hidden">
                    <li className='list_item'>Home Gym</li>
                </div>
                <Link to="products" onClick={() => {if(menuShower){dispatch({type:"SHOW_MENU"})}}} className="list_item_div li5 lg:hidden">
                    <li className='list_item li5'>Tutti i prodotti</li>
                </Link>
            </ul>
            <div className='flex justify-around items-center relative'>
            {showLoginInfo && <div className="text-slate-50 absolute top-0 left-[-10%]">Login</div>}
            {showLogoutInfo && <div className="text-slate-50 absolute top-0 left-[-10%]">Logout</div>}
                {!token ? 
                <ArrowRightOnRectangleIcon onMouseLeave={() => showInfo("Login", false)} onMouseOver={() => showInfo("Login", true)} className='icon-style my-3 mx-2' onClick={showLogin}/>
                :
                <ArrowLeftOnRectangleIcon onMouseLeave={() => showInfo("Logout", false)} onMouseOver={() => showInfo("Logout", true)} onClick={showLogout} className='icon-style my-3 mx-2'/>
                }
                {showCercaInfo && <div className="text-slate-50 absolute top-0 left-[22%]">Cerca</div>}
                <MagnifyingGlassIcon onMouseLeave={() => showInfo("Cerca", false)} onMouseOver={() => showInfo("Cerca", true)} onClick={showCerca} className='icon-style my-3 mx-2 lg:hidden'/>
                {showCarrelloInfo && <div className="text-slate-50 absolute left-[48%] top-0">Carrello</div>}
                <Link onMouseLeave={() => showInfo("Carrello", false)} onMouseOver={() => showInfo("Carrello", true)} className="icon-style my-3 mx-2" to={"/carrello"}><ShoppingCartIcon /></Link>
                <div>
                {showMenuInfo && <div className="text-slate-50 absolute top-0 left-[80%]">Menu</div>}
                    <Bars3Icon onMouseLeave={() => showInfo("Menu", false)} onMouseOver={() => showInfo("Menu", true)} onClick={showMenu} className=" xl:hidden lg:inline-block icon-style my-3 mx-2" />
                    
                </div>
        
                
                
            </div>
            </>
            :
            
                <NavBarMenu />
            }

            

            
        </div>
        <div ref={ghostDiv} onMouseOut={(e) => checkIndex(e)} className='bg-gray-800 w-full absolute'>  {/* ASCOLTARE AUDIO */}
            <ul ref={ghostList} className='flex justify-center '>
                {index && ghostMenu[index].map((e, i) => (
                        <li className='list_item py-5' key={i}>{e}</li>
                       
                ))}
            </ul>
            
        </div>
        
    </>
  )
}


export default NavBar