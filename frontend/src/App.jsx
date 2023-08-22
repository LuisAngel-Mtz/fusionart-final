import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Layout from './components/layout';
import Home2 from './pages/Home2';
import Home from './pages/home';
import About from './pages/about';
import Shop from './pages/shop';
import Login from './pages/inicio';
import Dashboard from './pages/Dashboard';
import Contact from './pages/contact';
import VendedorLog from './pages/VendedorLog';
import VendedorInfo from './pages/VendedorInfo';
import Login2 from './pages/login2';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Blog from './pages/blog';
import './styles/App.css';
import './styles/Inicio.css';
import './styles/VendedorLog.css';
import './styles/style.css';
import './styles/Login2.css';
import ShopContext from './components/shopcontext';
import Details from './pages/details';
import EditarVendedor from './pages/EditarVendedor';
import InsertarVendedor from './pages/InsertarVendedor';
import Vendedor from './pages/Vendedor';
import Produccion from './pages/produccion';
import InsertarLote from './pages/insertarLote';
import EditarProduccion from './pages/editarProduccion';




function ScrollToTop() {
  const { pathname } = useParams();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ShopContext>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="Home2" element={<Home2 />} /> */}
            <Route path="shop" element={<Shop />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="contact" element={<Contact />} />
            <Route path="vendedorLog" element={<VendedorLog />} />
            {/* <Route path="editarVendedor/:id" element={<EditarVendedor />}/> */}
            { <Route path="insertarvendedor" element={<InsertarVendedor />}/> }
            <Route path="vendedorInfo/:id" element={<VendedorInfo />} />
            <Route path="login2" element={<Login2 />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="details" element={<Details />} />
            {<Route path="insertarLote" element={<InsertarLote/>} /> }
            {/* {<Route path="vendedor" element={<Vendedor />} /> } */}
            <Route path="dashboard/*" element={<Dashboard />}>
              {<Route path="insertarVendedor" element={<InsertarVendedor />} /> }
              {<Route path="editarVendedor/:id" element={<EditarVendedor />} /> }
              {<Route path="vendedor" element={<Vendedor />} /> }
              {<Route path="produccion" element={<Produccion />} /> }
              {<Route path="EditarProduccion/:id" element={<EditarProduccion />} /> }
              {<Route path="Home2" element={<Home2 />} /> }
             
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ShopContext>
  );
}

export default App;
