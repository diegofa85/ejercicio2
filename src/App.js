import React from 'react';
import coches from './Coches.js';
import './App.css';

const App = () => {
  return (
    <div>
      {coches.map((coche, index) => (
        <div key={index} className="StyledTextComponent">
          {`${coche.Matricula} - ${coche.Modelo} ${coche.Marca} (${coche.Tipo})`}
        </div>
      ))}
    </div>
  );
};

export default App;
