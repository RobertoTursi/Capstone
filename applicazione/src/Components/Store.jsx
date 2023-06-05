import { ChevronRightIcon } from "@heroicons/react/24/outline"
import Card from './Card'
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Store = () => {

    const [carouselIndex, setCarouselIndex] = useState(0)
    const [carouselIndex2, setCarouselIndex2] = useState(0)
    const [counter, setCounter] = useState(0)
    const [nCol] = useState(5)  //inserisci il numero di colonne che del carosello

    let token = useSelector((state) => state.token)
    let tokenStorage = sessionStorage.getItem('token')

    const [productsData, setProductsData] = useState(null)

    const attrezzi = [
        {
            name: "BILANCIERI",
            img: "/src/assets/icone/barbell.png",
            price: "400€" 
        },
        {
            name: "PANCHE",
            img: "/src/assets/icone/bench.svg",
            price: "9.900€"    
        },
        {
            name: "VOGATORE",
            img: "/src/assets/icone/Skillrow.svg",
            price: "6.000€"    
        },
        {
            name: "PESI LIBERI",
            img: "/src/assets/icone/Dumbell.svg",
            price: "100€"    
        },
        {
            name: "CROSS TRAINER ED ELLITTICHE",
            img: "/src/assets/icone/synchro.svg",
            price: "4.300€"    
        },
        {
            name: "TAPIS ROULANT",
            img: "/src/assets/icone/Skillrun.svg",
            price: "1.345€"    
        },
        {
            name: "ABBIGLIAMENTO FITNESS",
            img: "/src/assets/icone/fitness-wear.svg",
            price: "8.000€"    
        },
        {
            name: "ATTREZZI CORPO LIBERO",
            img: "/src/assets/icone/Exercise-tools.svg",
            price: "500€"    
        },
        {
            name: "PESI LIBERI",
            img: "/src/assets/icone/gear.svg",
            price: "340€"    
        },
        {
            name: "ABBIGLIAMENTO CICLISMO",
            img: "/src/assets/icone/indoor-cycling-collection.svg",
            price: "5.000€"
        }
        // {
        //     name: "1",
        //     img: "/src/assets/icone/barbell.png",
        //     price: "400€" 
        // },
        // {
        //     name: "2",
        //     img: "/src/assets/icone/bench.svg",
        //     price: "9.900€"    
        // },
        // {
        //     name: "3",
        //     img: "/src/assets/icone/Skillrow.svg",
        //     price: "6.000€"    
        // },
        // {
        //     name: "4",
        //     img: "/src/assets/icone/Dumbell.svg",
        //     price: "100€"    
        // },
        // {
        //     name: "5",
        //     img: "/src/assets/icone/synchro.svg",
        //     price: "4.300€"    
        // },
        // {
        //     name: "6",
        //     img: "/src/assets/icone/Skillrun.svg",
        //     price: "1.345€"    
        // },
        // {
        //     name: "7",
        //     img: "/src/assets/icone/fitness-wear.svg",
        //     price: "8.000€"    
        // },
        // {
        //     name: "8",
        //     img: "/src/assets/icone/Exercise-tools.svg",
        //     price: "500€"    
        // },
        // {
        //     name: "9",
        //     img: "/src/assets/icone/gear.svg",
        //     price: "340€"    
        // },
        // {
        //     name: "0",
        //     img: "/src/assets/icone/indoor-cycling-collection.svg",
        //     price: "5.000€"
        // }
    ]
    


        const carouselTriggered = () => {  
            if(counter > attrezzi.length-1){
                setCarouselIndex(1)
                setCarouselIndex2(0)
                setCounter(1)
            } else if(counter > attrezzi.length-nCol){
                setCarouselIndex2(carouselIndex2 + 1)
                setCounter(counter+1)
                setCarouselIndex(carouselIndex + 1)    
            } else {
                setCounter(counter+1)
                setCarouselIndex(carouselIndex + 1)
            }
    
            
    
            console.log("index1: ", carouselIndex)
            console.log("index2: ", carouselIndex2)
            console.log("counter: ", counter)
            console.log(attrezzi[8].img)
            console.log(attrezzi[9].img)
        }
        // const carouselTriggered = () => {
        
        //     if(counter > 9){
        //         setCarouselIndex(1)
        //         setCarouselIndex2(0)
        //         setCounter(1)
        //     } else if(counter > 5){
        //         setCarouselIndex2(carouselIndex2 + 1)
        //         setCounter(counter+1)
        //         setCarouselIndex(carouselIndex + 1)    
        //     } else {
        //         setCounter(counter+1)
        //         setCarouselIndex(carouselIndex + 1)
        //     }
    
            
    
        //     console.log("index1: ", carouselIndex)
        //     console.log("index2: ", carouselIndex2)
        //     console.log("counter: ", counter)
        //     console.log(attrezzi[8].img)
        //     console.log(attrezzi[9].img)
        // }
    
    


    const allProductsFetch = async () => {
        try{
            let response = await fetch(
                'http://localhost:8085/attrezzi',
                { headers: { Authorization: `Bearer ${tokenStorage}`} }
                )
            if(response.ok) {
                setProductsData(await response.json())
                
            }
        } catch(error){
            console.log("data: ", error)
        }
    }

    useEffect(() => {
        allProductsFetch()
    }, [])
    useEffect(() => {
        allProductsFetch()
    }, [token])
    
  return (
    <>
        <h1 className='font-bold text-6xl text-center mb-16'>Tutti i prodotti</h1>
        <div className='flex justify-around mb-4 relative'>
            <div className='flex flex-col items-center justify-between'>
                <img src={counter < attrezzi.length-nCol+5 ? attrezzi[carouselIndex+nCol-5].img : attrezzi[carouselIndex2-nCol+1].img} alt="" className='w-14'/> 
                <h5 className='font-semibold text-slate-800'>{counter < attrezzi.length-nCol+5 ? attrezzi[carouselIndex+nCol-5].name : attrezzi[carouselIndex2-nCol+1].name}</h5>
               {/* <h5 className='font-semibold text-slate-800'>{attrezzi[carouselIndex].name}</h5> */}
            </div>
            <div className='flex flex-col items-center justify-between'>
                <img src={counter < attrezzi.length-nCol+4 ? attrezzi[carouselIndex+nCol-4].img : attrezzi[carouselIndex2-nCol+2].img} alt="" className='w-14'/> 
                <h5 className='font-semibold text-slate-800'>{counter < attrezzi.length-nCol+4 ? attrezzi[carouselIndex+nCol-4].name : attrezzi[carouselIndex2-nCol+2].name}</h5>
               {/* <h5 className='font-semibold text-slate-800'>{attrezzi[carouselIndex + 1].name}</h5> */}
            </div>
            <div className='flex flex-col items-center justify-between'>
                <img src={counter < attrezzi.length-nCol+3 ? attrezzi[carouselIndex+nCol-3].img : attrezzi[carouselIndex2-nCol+3].img} alt="" className='w-14'/> 
               <h5 className='font-semibold text-slate-800'>{counter < attrezzi.length-nCol+3 ? attrezzi[carouselIndex+nCol-3].name : attrezzi[carouselIndex2-nCol+3].name}</h5>
               {/* <h5 className='font-semibold text-slate-800'>{attrezzi[carouselIndex + 2].name}</h5> */}
            </div>
            <div className='flex flex-col items-center justify-between'>
                <img src={counter < attrezzi.length-nCol+2 ? attrezzi[carouselIndex+nCol-2].img : attrezzi[carouselIndex2-nCol+4].img} alt="" className='w-14'/> 
                <h5 className='font-semibold text-slate-800'>{counter < attrezzi.length-nCol+2 ? attrezzi[carouselIndex+nCol-2].name : attrezzi[carouselIndex2-nCol+4].name}</h5>
               {/* <h5 className='font-semibold text-slate-800'>{attrezzi[carouselIndex + 3].name}</h5> */}
            </div>
            <div className='flex flex-col items-center justify-between'>
                <img src={counter < attrezzi.length-nCol+1 ? attrezzi[carouselIndex+nCol-1].img : attrezzi[carouselIndex2-nCol+5].img} alt="" className='w-14'/> 
                <h5 className='font-semibold text-slate-800'>{counter < attrezzi.length-nCol+1 ? attrezzi[carouselIndex+nCol-1].name : attrezzi[carouselIndex2-nCol+5].name}</h5>
               {/* <h5 className='font-semibold text-slate-800'>{attrezzi[carouselIndex + 4].name}</h5> */}
            </div> 
            
            <div className='rounded-full w-10 h-10 flex justify-center items-center absolute right-0 top-[30%] hover:border-slate-900 hover:border-2'
            onClick={carouselTriggered}>
                <ChevronRightIcon className='icon-style-2'/>
            </div>
            
        </div>

        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10">
            {productsData?.map((attrezzo, i) => (
                <Card {...attrezzo} key={i} />
            ))}
        </div>
        {/* <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10">
            {productsData?.map((attrezzo, i) => (
                <Card {...attrezzo} key={i} />
            ))}
        </div> */}
        
    </>
    
  )
}

export default Store

 