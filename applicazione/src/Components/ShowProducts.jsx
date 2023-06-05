import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card';
import { useSelector } from 'react-redux';

const ShowProducts = ({ ifExists }) => {

    const [tipoAttrezzoData, setTipoAttrezzoData] = useState(null)
    let token = useSelector((state) => state.token)
    let tokenStorage = sessionStorage.getItem('token')
    
    // const params = useParams();
    // console.log(params.tipoAttrezzo)

    const {tipoAttrezzo} = useParams(); //scrivere così è uguale a come abbiamo scritto sopra, semplicemente in questo caso
    console.log(tipoAttrezzo)          //abbiamo estratto tipoAttrezzo (che è l'unica cosa che ci interessa in questo caso)
                                      // in modo tale da non dover ogni volta scrivere 'params.tipAttrezzo'
                  
                           

    useEffect(() => {
        tipoAttrezzoProductsFetch()
    }, [tipoAttrezzo, token])

    const tipoAttrezzoProductsFetch = async () => {
        try{
            let response = await fetch(`http://localhost:8085/attrezzi/tipoAttrezzo/${tipoAttrezzo}`,
            { headers: { Authorization: `Bearer ${tokenStorage}`} }
            )
            if(response.ok) {
                setTipoAttrezzoData(await response.json())
                
            }
        } catch(error){
            console.log("TipoAttrezzo data: ", error)
        }
    }

  return (
    <div>
        {tipoAttrezzoData?.map((attrezzo, i) => (
            <Card {...attrezzo} key={i} ifExists={ifExists}/>
        ))}
    </div>
  )
}

export default ShowProducts
