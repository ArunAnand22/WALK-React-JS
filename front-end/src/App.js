import './App.css';
import Home from './Pages/Home'
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/productlist' element={<ProductList/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
