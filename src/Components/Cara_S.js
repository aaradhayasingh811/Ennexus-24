import React from 'react';
import "./Cara_S.css";
import poster from "./assets/images/img_5.png";

export default function Cara_S(){
    return(
        <>
        <section>
        
        </section>
          
          <div className="container cara">
          
            <div className="cube">
              <div className="parts" style={{"--i": 0}}></div>
              <div className="parts" style={{"--i": 1}}></div>
              <div className="parts" style={{"--i": 2}}></div>
              <div className="parts" style={{"--i": 3}}></div>
              <div className="parts" style={{"--i": 4}}></div>
              <div className="parts" style={{"--i": 5}}></div>
              {/* <div className="parts" style={{"--i": 0}}></div> */}

              {/* <div className="parts" style="--i: 1;"></div>
              <div className="parts" style="--i: 2;"></div>
              <div className="parts" style="--i: 3;"></div>
              <div className="parts" style="--i: 4;"></div>
              <div className="parts" style="--i: 5;"></div> */}
            </div>
          
          </div>
        </>
    );
}