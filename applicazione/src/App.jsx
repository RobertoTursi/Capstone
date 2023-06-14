import { Carrello, Checkout, Footer, Home, Login, NavBar, OrderConfirmed, Product, ShowProducts, Store, } from './Components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'


const App = () => {

  const loginState = useSelector((state) => state.login)
  const menuShower = useSelector((state) => state.menu)
  const searchBar = useSelector((state) => state.searchBar)


  return (
    <BrowserRouter>
    {loginState && <Login />}

    <NavBar/> 
    {!menuShower &&  <main className={`${loginState ? 'blocked' : ''} ${searchBar ? 'bg-black' : 'px-8'} py-12`} >
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/carrello' element={<Carrello />} />
          <Route path="products" element={<Store />}/>
          <Route path="product/:id" element={<Product />}/>
          <Route path='products/:tipoAttrezzo' element={<ShowProducts ifExists/>}/>
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/order-confirmed" element={<OrderConfirmed />} />
        </Routes>
      </main>}
      {!menuShower && <Footer />}
    </BrowserRouter>
  )
}

export default App