import './App.css';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Shop from "./Pages/Shop";
import ShopCategory from './Pages/ShopCategory';
import Product from "./Pages/Product";
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory category="men" />}/>
        <Route path='/women' element={<ShopCategory category="women" />}/>
        <Route path='/kids' element={<ShopCategory category="kids" />}/>

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
