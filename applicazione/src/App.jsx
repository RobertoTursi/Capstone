import { Carrello, Checkout, Footer, Home, Login, Loginnnn, NavBar, Product, Registered2, ShowProducts, Store, } from './Components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

const App = () => {

  const loginState = useSelector((state) => state.login)
  const menuShower = useSelector((state) => state.menu)

  return (
    <BrowserRouter>
    {loginState && <Login />}

        <NavBar/>

      {!menuShower && <main  className={`${loginState ? 'blocked' : ''} px-8 py-12`} >
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/carrello' element={<Carrello />} />
          <Route path="products" element={<Store />}/>
          <Route path="products/ShowProducts/:tipoAttrezzo/products/:id" element={<Product />}/>
          <Route path='products/ShowProducts/:tipoAttrezzo' element={<ShowProducts ifExists/>}/>
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </main>}
      {!menuShower && <Footer />}
    </BrowserRouter>
  )
}

export default App