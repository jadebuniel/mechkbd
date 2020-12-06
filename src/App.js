import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import Products from './pages/Products';
import Switches from './pages/Switches';
import Keycaps from './pages/Keycaps';
import Keyboards from './pages/Keyboards';
import Miscellaneous from './pages/Miscellaneous';
import { ContextProvider } from "./context/Context"

function App() {
  return (
    <ContextProvider>
      <div className="App">
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/products' exact component={Products}/>
            <Route path='/products/switches' exact component={Switches}/>
            <Route path='/products/keycaps' exact component={Keycaps}/>
            <Route path='/products/keyboards' exact component={Keyboards}/>
            <Route path='/products/miscellaneous' exact component={Miscellaneous}/>
          </Switch>
      </div>
    </ContextProvider>
  );
}

export default App;