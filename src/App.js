import './App.css';
import fccLogo from './img/fcc_logo.svg';
import { Boton } from './components/Boton.jsx';
import { Contador } from './components/Contador.jsx';
import { useState } from 'react';
function App() {

  const [ numClick , setNumClicks ] = useState(0);

  const clickHandler = () => {
    setNumClicks( numClick + 1 );
  };
  const reiniciar = () => {
    setNumClicks( 0 );
  };

  return (
    <div className="App">
        <div className="logo-contenedor">
          <img className="logo"
          src={fccLogo}
          alt="logo"
          />  
        </div>
        <div className="contenedor-main">
          <Contador numClicks={numClick} />
          <Boton 
          texto="Click"
          btnClick={true}
          clickHandler={clickHandler}
          />
          <Boton 
          texto="Reiniciar"
          btnClick={false}
          clickHandler={reiniciar}
          />
        </div>
    </div>
  );
}

export default App;
