import './App.css';
import { Footer } from './pages/footer/Footer';
import Home from './pages/home/Home';
import { NavBar } from './pages/navbar/NavBar';
import { Products } from './pages/products/Products';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Home/>
     <Products/>
     <Footer/>
    </div>
  );
}

export default App;
