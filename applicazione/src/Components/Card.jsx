import { useState } from "react"
import { Link } from "react-router-dom"


const Card = ({ ifExists, id, nome, img, prezzo, tipoAttrezzo }) => {

  const [colorChanged, setColorChanged] = useState(false)
  const [buttonChanged, setButtonChanged] = useState(false)


  let img2 = img
  img = "/src/assets/" + tipoAttrezzo + "/" + img2 

  return (
    <div onMouseLeave={() => setColorChanged(false)} onMouseOver={() => setColorChanged(true)} 
    className= {`${!ifExists ? 
    `${!colorChanged ? "card-gradient" : "card-hover"} flex flex-col items-center m-3 rounded-md p-2 pb-[2rem]` : 
    'grid-container-7 m-3 rounded-md p-4 bg-white items-center w-3/5'}`}>

    {/* <div className="bg-slate-100 flex flex-col items-center m-3 rounded-md p-7"> */}
      <img src={img} alt="/attrezzo/img" className={`${!ifExists ? "w-[70%]" : "" }`}/>
      <h4 className= {`${!ifExists ? "mt-[2.75rem]" : "" } text-slate-950 font-bold text-lg`}>{nome}</h4>
      <span className={`${!ifExists ? "" : "font-bold text-lg" } text-slate-600 block font-bold`}>{prezzo}€</span>
      
      <Link to={`${!ifExists ? `ShowProducts/${tipoAttrezzo}` : `products/${id}`}`}>
        <button onClick={() => setButtonChanged(true)} className=  {`${buttonChanged ? "bg-white scale-110 transition-all duration-300" : ""} bg-black text-slate-100 border rounded-md p-2 mt-5 font-bold text-sm`} type='button'>SCOPRI</button></Link>
      {/* <Link to={`ShowProducts/${tipoAttrezzo}`}><button className="bg-black hover:scale-110 transition-all duration-300 text-slate-100 border rounded-md w-full p-2 mt-5 font-bold text-sm" type='button'>SCOPRI</button></Link> */}
    </div>
    //   <Link to={`${!ifExists ? `ShowProducts/${tipoAttrezzo}` : `products/${id}`}`}><button className="bg-black hover:scale-110 transition-all duration-300 text-slate-100 border rounded-md w-full p-2 mt-5 font-bold text-sm" type='button'>SCOPRI</button></Link>
    //   {/* <Link to={`ShowProducts/${tipoAttrezzo}`}><button className="bg-black hover:scale-110 transition-all duration-300 text-slate-100 border rounded-md w-full p-2 mt-5 font-bold text-sm" type='button'>SCOPRI</button></Link> */}
    // </div>
  )
}

export default Card
// import { Link } from "react-router-dom"


// const Card = ({ ifExists, id, nome, img, prezzo, tipoAttrezzo }) => {
//   let img2 = img
//   img = "/src/assets/" + tipoAttrezzo + "/" + img2 
//   return (
//     <div className="card-gradient flex flex-col items-center m-3 rounded-md p-7">
//     {/* <div className="bg-slate-100 flex flex-col items-center m-3 rounded-md p-7"> */}
//       <img src={img} alt="/attrezzo/img" className="w-28" />
//       <h4 className="text-slate-950 font-bold">{nome}</h4>
//       <span className="text-slate-600 block font-bold">{prezzo}€</span>
      
//       <Link to={`${!ifExists ? `ShowProducts/${tipoAttrezzo}` : `products/${id}`}`}><button className="bg-black hover:scale-110 transition-all duration-300 text-slate-100 border rounded-md w-full p-2 mt-5 font-bold text-sm" type='button'>SCOPRI</button></Link>
//       {/* <Link to={`ShowProducts/${tipoAttrezzo}`}><button className="bg-black hover:scale-110 transition-all duration-300 text-slate-100 border rounded-md w-full p-2 mt-5 font-bold text-sm" type='button'>SCOPRI</button></Link> */}
//     </div>
//   )
// }

// export default Card