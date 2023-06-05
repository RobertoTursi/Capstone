import { MagnifyingGlassIcon, ShoppingCartIcon, ArrowRightOnRectangleIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import NavBarMenu from "./NavBarMenu"
import { useState } from "react"




const NavBar = () => {

    // const [index, setIndex] = useState(null)
    // const [liMouseLeave, setLiMouseLeave] = useState(false)
    // const [divMouseLeave, setDivMouseLeave] = useState(false)

    const dispatch = useDispatch()
    const index = useSelector((state) => state.index)
    const loginState = useSelector((state) => state.login)
    const menuShower = useSelector((state) => state.menu)

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

    

  return (
    <>
    {/* <Link to="/" className={`nav-Link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>             */}
        <div className={`${loginState ? 'blocked' : ''} flex justify-around bg-black lg:justify-between lg:px-4`}  >
            <div className='logo h-20 w-36'></div>
            <ul className='flex justify-around flex-row items-center'>
                <div onMouseLeave={() => dispatch({type: "SET_INDEX", payload: null}) } onMouseOver={(e) => dispatch({type: "SET_INDEX", payload: menuTriggered(e)}) }  className="lg:hidden list_item_div li0">
                    <li className='list_item li0'>Tapis Roulant</li>
                </div>
                {/* <div onMouseLeave={{(e) => dispatch({type: "SET_INDEX", payload: menuTriggered(e)}) }} onMouseOver={(e) => dispatch({type: "SET_INDEX", payload: menuTriggered(e)})  className="lg:hidden list_item_div li0">
                    <li className='list_item li0'>Tapis Roulant</li>
                </div> */}
                <div onMouseLeave={() => dispatch({type: "SET_INDEX", payload: null}) } onMouseOver={(e) => dispatch({type: "SET_INDEX", payload: menuTriggered(e)})} className="lg:hidden list_item_div li1">
                    <li className='list_item li1'>Bike</li>
                </div>
                <div onMouseLeave={() => dispatch({type: "SET_INDEX", payload: null}) } onMouseOver={(e) => dispatch({type: "SET_INDEX", payload: menuTriggered(e)}) }className="lg:hidden list_item_div li2">
                    <li className='list_item li2'>Ellittiche</li>
                </div>
                <div className="slist_item_div lg:hidden">
                    <li className='list_item'>Vogatore</li>
                </div>
                <div onMouseLeave={() => dispatch({type: "SET_INDEX", payload: null}) } onMouseOver={(e) => dispatch({type: "SET_INDEX", payload: menuTriggered(e)}) }className="lg:hidden list_item_div li3">
                    <li className='list_item li3'>Forza</li>
                </div>
                <div onMouseLeave={() => dispatch({type: "SET_INDEX", payload: null}) } onMouseOver={(e) => dispatch({type: "SET_INDEX", payload: menuTriggered(e)}) }className="lg:hidden list_item_div li4">
                    <li className='list_item li4'>Accessori</li>
                </div>
                <div className="list_item_div lg:hidden">
                    <li className='list_item'>Home Gym</li>
                </div>
                <Link to="products" className="list_item_div li5 lg:hidden">
                    <li className='list_item li5'>Tutti i prodotti</li>
                </Link>
            </ul>
            <div className='flex justify-around items-center'>
                <ArrowRightOnRectangleIcon className='icon-style my-3 mx-2' onClick={() => dispatch({type: "SHOW_LOGIN", payload: true})}/>
                <MagnifyingGlassIcon className='icon-style my-3 mx-2 lg:hidden'/>
                <ShoppingCartIcon className='icon-style my-3 mx-2'/>
                <div>
                    <Bars3Icon onClick={() => dispatch({type: "SHOW_MENU"})} className=" xl:hidden lg:inline-block icon-style my-3 mx-2" />
                    {menuShower && <NavBarMenu />}
                </div>
        
                
                
            </div>
            {/* <div className='flex justify-around items-center'>
                <Link to="login"><ArrowRightOnRectangleIcon className='icon-style my-3 mx-2'/></Link>
                <MagnifyingGlassIcon className='icon-style my-3 mx-2'/>
                <ShoppingCartIcon className='icon-style my-3 mx-2'/>
    
            </div> */}
        </div>
        <div className='bg-gray-800 w-full absolute'>  {/* ASCOLTARE AUDIO */}
            <ul className='flex justify-center '>
                {index && ghostMenu[index].map((e, i) => (
                        <li className='list_item py-5' key={i}>{e}</li>
                        
                    
                ))}
            </ul>
            
        </div>
        
    </>
  )
}




// const NavBar = () => {

//     const [index, setIndex] = useState(null)
//     // const [liMouseLeave, setLiMouseLeave] = useState(false)
//     // const [divMouseLeave, setDivMouseLeave] = useState(false)


//     const ghostMenu = [
//         [],
//         ["Technogym Run", "Technogym MyRun", "Run Personal"],
//         ["Technogym Ride", "Technogym Bike", "Technogym Cycle", "Bike Personal", "Recline Personal", "My Cycling"],
//         ["Technogym Elliptical", "Cross Personal"],
//         ["Palestre Multifunzione", "Pesi liberi", "Panche", "Racks", "Carico selezionabile", "Plate Loaded", "Cable Station"],
//         ["Wellness Ball Active Sitting", "Exercise Mat", "Elastic bands", "Loop bands", "Foam roller"],
//         ["Cardio", "Forza", "Funzionale e Flessibilità"]
//     ]

//     const menuTriggered = (e) => {
//         console.log(e.target.className)
//         let divClassName = e.target.className
//         // if(li.includes("li2")){
//         //     window.alert("bikeee")
//         //     console.log(ghostMenu[0])
//         // }
//         if(divClassName.includes("li0")){
//             setIndex(1)
//         } else if(divClassName.includes("li1")){
//             setIndex(2)
//         } else if(divClassName.includes("li2")){
//             setIndex(3)
//         } else if(divClassName.includes("li3")){
//             setIndex(4)
//         } else if(divClassName.includes("li4")){
//             setIndex(5)
//         } else if(divClassName.includes("li5")){
//             setIndex(6)
//         } else {
//             setIndex(null)
//         }

//     }

  
//     // const checkMouseLeaved = () => {
//     //     console.log("lasciato")
//     //     if(liMouseLeave === true && divMouseLeave === true){
//     //         setIndex(null)
//     //     }
//     // }

//     // useEffect(() => {
//     //     checkMouseLeaved
//     // }, [liMouseLeave, divMouseLeave])
    

//   return (
//     <>
//     {/* <Link to="/" className={`nav-Link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>             */}
//         <div className='flex justify-around bg-black'>
//             <div className='logo h-20 w-36'></div>
//             <ul className='flex justify-around flex-row items-center'>
//                 <div onMouseOver={(e) => menuTriggered(e)}  className="list_item_div li0">
//                     <li className='list_item li0'>Tapis Roulant</li>
//                 </div>
//                 {/* <div onMouseOver={(e) => menuTriggered(e)}  className="list_item_div li0">
//                     <li className='list_item li0'>Tapis Roulant</li>
//                 </div> */}
//                 <div onMouseOver={(e) => menuTriggered(e)} className="list_item_div li1">
//                     <li className='list_item li1'>Bike</li>
//                 </div>
//                 <div onMouseOver={(e) => menuTriggered(e)} className="list_item_div li2">
//                     <li className='list_item li2'>Ellittiche</li>
//                 </div>
//                 <div onMouseOver={(e) => menuTriggered(e)} className="list_item_div">
//                     <li className='list_item'>Vogatore</li>
//                 </div>
//                 <div onMouseOver={(e) => menuTriggered(e)} className="list_item_div li3">
//                     <li className='list_item li3'>Forza</li>
//                 </div>
//                 <div onMouseOver={(e) => menuTriggered(e)} className="list_item_div li4">
//                     <li className='list_item li4'>Accessori</li>
//                 </div>
//                 <div onMouseOver={(e) => menuTriggered(e)} className="list_item_div">
//                     <li className='list_item'>Home Gym</li>
//                 </div>
//                 <Link to="products" onMouseOver={(e) => menuTriggered(e)} className="list_item_div li5">
//                     <li className='list_item li5'>Tutti i prodotti</li>
//                 </Link>
//             </ul>
//             <div className='flex justify-around items-center'>
//                 <Link to="login"><ArrowRightOnRectangleIcon className='icon-style my-3 mx-2'/></Link>
//                 <MagnifyingGlassIcon className='icon-style my-3 mx-2'/>
//                 <ShoppingCartIcon className='icon-style my-3 mx-2'/>
    
//             </div>
//         </div>
//         <div className='bg-gray-800 w-full absolute'>  {/* ASCOLTARE AUDIO */}
//             <ul className='flex justify-center '>
//                 {index && ghostMenu[index].map((e, i) => (
//                         <li className='list_item py-5' key={i}>{e}</li>
                        
                    
//                 ))}
//             </ul>
//             {index && <div key={10} className='bg-transparent text-transparent' onMouseOver={(e) => menuTriggered(e)}>check</div>}
//         </div>
        
//     </>
//   )
// }

export default NavBar