import React from 'react';
import "./Event_card.css";
import { Link } from 'react-router-dom';

 



export default function Eventcard(props) {
  return (
    <>
    
      <article className="card">
        <img
          className="card__background"
          src={props.src}
          alt='event-img'
          width="1920"
          height="2193"
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">
              {props.description}
            </p>
          </div>
          <button className="card__button">Read More</button>
      </div>
    </article >
    </>
  );
}