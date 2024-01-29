
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import womens_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png'


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />''
          <Route path='/mens' element={<ShopCategory banner={men_banner } category='men' />} />
          <Route path='/womens' element={<ShopCategory  banner={womens_banner } category='women'/>} />
           <Route path='/kids' element={<ShopCategory   banner={kids_banner } category='kid' />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
           <Route path='/Login' element={<LoginSignup/>} />
        </Routes>
      </BrowserRouter>
      
      <Footer/>
 
    </div>
  );
}

export default App;
