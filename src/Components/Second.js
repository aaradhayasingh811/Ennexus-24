import React from 'react';
import { useRef, useState, useEffect } from 'react';
import "./Second.css";
import Event_Card from './Event_card'  
import Cara_S from './Cara_S'  
import Landing from './Landing'  
import poster from "./assets/images/img_5.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';





export default function Second(){
    return(

        

    <>
    <Navbar />
    <Landing />

    {/* caraosel */}

    < Cara_S />

    {/* cards for the events */}

    <div className="container full">
    <div className="container d-flex align-items-around card_section">
        <div className="row">
    <h1 className='text-center mb-5 win_text' style={{paddingTop:'5rem'}}>E V E N T S</h1>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Event_Card title="Flip Flop"  description="This is the event" src={poster} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <Event_Card  title="Codigo" description="This is the event" src={poster} />

            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <Event_Card title="Algo Hunt" description="This is the event" src={poster} />

            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <Event_Card title="Weild The Web"  description="This is the event" src={poster}  />

            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <Event_Card title="Debugger King"  description="This is the event"  src={poster} />

            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <Event_Card  title="Capture The Flag 2.0" description="This is the event" src={poster}  />

            </div>
        </div>
    </div>
    </div>
    <Footer />
    </>
    );
}