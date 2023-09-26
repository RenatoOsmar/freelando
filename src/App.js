import React from 'react';
import { Estilos } from './componentes/EstilosGlobais/Estilos';
import { Card } from './componentes/Card/Card';
import { ProvedorTema } from './componentes/ProvedorTema/ProvedorTema';


export function App() {
  return (
    <ProvedorTema>
      <Estilos />
        <Card>
           <h1>@freelando</h1>
        </Card>
    </ProvedorTema>
  );
}

export default App;
