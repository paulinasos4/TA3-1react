import { useState } from 'react'
import './App.css'
import Card from './TA1/card'

const App = () => {
  const cards = [
    {
      titulo: 'Proyecto 1',
      descripcion: 'Esta es la card 1',
      personaAsignada: 'Paulina Sosa',
      fechaInicio: '2005/01/01',
      fechaFin: '2008/08/31'
    },
    {
      titulo: 'Proyecto 2',
      descripcion: 'Esta es la card 2',
      personaAsignada: 'Emiliano Sosa',
      fechaInicio: '2007/02/01',
      fechaFin: '2010/02/18'
    },
    {
      titulo: 'Proyecto 3',
      descripcion: 'Esta es la card 3',
      personaAsignada: 'Adrian Sosa',
      fechaInicio: '1890/03/01',
      fechaFin: '2000/03/31'
    }
  ];

  return (
    <div>
      {cards.map((card, index) => (
        <Card
          key={index}
          titulo={card.titulo}
          descripcion={card.descripcion}
          personaAsignada={card.personaAsignada}
          fechaInicio={card.fechaInicio}
          fechaFin={card.fechaFin}
        />
      ))}
    </div>
  );
};

export default App
