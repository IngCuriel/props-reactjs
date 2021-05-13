import './App.css';
import Titulo from './components/Titulo';
import ProductoList from './components/ProductoList';

function App(props) {
  let titulo = "Lista de productos"
  return (
    <div className="App">
      <header className="App-header">
        <p>{props.classe}</p>
      </header>
      <Titulo /> 
      <ProductoList/>
    </div>
  );
}

export default App;
