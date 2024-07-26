import './App.css';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Shop from "./Pages/Shop";
import ShopCategory from './Pages/ShopCategory';
import Product from "./Pages/Product";
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup';
import Footer from './Components/Footer';
import men_banner from './Components/Assets/Frontend_Assets/banner_mens.png'
import women_banner from './Components/Assets/Frontend_Assets/banner_women.png'
import kid_banner from './Components/Assets/Frontend_Assets/banner_kids.png'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids" />}/>

        <Route path='/product' element={<Product />}>
          <Route path=':productID' element={<Product/>}/>
        </Route>

        <Route path='/cart' element={<Cart/>} />
        <Route path='/loginsignup' element={<LoginSingup/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
