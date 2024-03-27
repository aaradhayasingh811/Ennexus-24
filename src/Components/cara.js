import React from 'react';
import { useRef, useState, useEffect } from 'react';
import "./Content.css";
import ss from "./assets/images/univ.jpg";
import ank from "./assets/images/Ankush.jpg";
import poster from "./assets/images/FF.jpeg";
import event from "./assets/images/events.jpg";

export default function Cara(){
    return (
        <>
        <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
       
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={ss} alt=""
          className="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
           />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Gallery</h1>
              <p>
                Visit to see the exciting moment of Ennexus'23
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                    Visit
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={event} alt=""
          className="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
           />
          <div className="container">
            <div className="carousel-caption">
              <h1>More Events..</h1>
              <p>
                Click here to visit more events of Ennexus.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  More..
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> 
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
        </>
    );
}