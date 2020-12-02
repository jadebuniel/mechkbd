import './App.css';
import Carousel from './component/Carousel/Carousel';
import Categories from './component/Categories/Categories';
import Featured from './component/Featured/Featured';
import Nav from './component/Nav/Nav';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Carousel/>
        <Categories/>
        <Featured/>
    </div>
  );
}

export default App;