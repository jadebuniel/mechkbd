import { Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import Products from './pages/Products';
import Switches from './pages/Switches';
import Keycaps from './pages/Keycaps';
import Keyboards from './pages/Keyboards';
import Miscellaneous from './pages/Miscellaneous';
import Cart from './pages/Cart';
import { ContextProvider } from "./context/Context"
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <ContextProvider>
      <CartProvider>
      <div className="App">
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/products' exact component={Products}/>
            <Route path='/products/switches' exact component={Switches}/>
            <Route path='/products/keycaps' exact component={Keycaps}/>
            <Route path='/products/keyboards' exact component={Keyboards}/>
            <Route path='/products/miscellaneous' exact component={Miscellaneous}/>
            <Route path='/cart' exact component={Cart}/>
          </Switch>
      </div>
      </CartProvider>
    </ContextProvider>
  );
}

export default App;