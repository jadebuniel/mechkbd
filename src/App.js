import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/products' exact component={Products}/>
        </Switch>
    </div>
  );
}

export default App;