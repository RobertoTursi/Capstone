import { Link } from "react-router-dom"


const OrderConfirmed = () => {
  return (
    <div className="flex justify-center flex-col items-center h-[80vh]">
        <div className="text-5xl font-bold">Ordine confermato!</div>
        <div className="flex items-end">
            <span className="text-9xl mb-8">...</span>
            <div className="delivery-icon"><img src="/src/assets/order-confirmed.png" alt="" /></div>
        </div>
        <Link to={"/products"} className="text-3xl font-semibold">Continua ad acquistare</Link>
    </div>
  )
}

export default OrderConfirmed