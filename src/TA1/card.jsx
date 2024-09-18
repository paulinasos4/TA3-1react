import React from 'react';

import './card.css';

const Card = (props) => {
  return (
    <div className="card">
      <h2 className="card-title">{props.titulo}</h2>
      <p className="card-description">{props.descripcion}</p>
      <p className="card-persona">Persona asignada: {props.personaAsignada}</p>
      <p className="card-fecha-inicio">Fecha inicio: {props.fechaInicio}</p>
      <p className="card-fecha-fin">Fecha fin: {props.fechaFin}</p>
    </div>
  );
};

export default Card;