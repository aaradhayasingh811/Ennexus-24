import React from 'react';
import { useRef, useState, useEffect } from 'react';
import "./Content.css";
import ReactDOM from 'react-dom/client';
import ss from "./assets/images/univ.jpg";
import ank from "./assets/images/Ankush.jpg";
import poster from "./assets/images/FF.jpeg";
import event from "./assets/images/events.jpg";
import pic from "./assets/images/pici.jpg";
import Card from './card'  
import Cara from './cara'  
import Gallery from './Gallery';
import Event_desc from './Event_desc';
import Navbar from "./NavbarE";
import Footer from "./Footer";







export default function Debugger (){
    return (
        <>
        
        <>
        < Navbar />
        <div className="container full">
  
  <main>
    
    <div className="container marketing">
      < Event_desc name="D E B U G G E R   K I N G"
      desc ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

      src={poster}
      />
  
      {/* <hr className="featurette-divider" /> */}

      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 text-center gallery_pic">
        <Gallery src={pic} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center gallery_pic">
        <Gallery src={pic} />

        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center gallery_pic">
        <Gallery src={pic} />

        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center gallery_pic">
        <Gallery src={pic} />

        </div>
      </div>
      

        {/* winner */}
        <div className="row mb-5">
        <h1 className='text-center my-5 win_text'>Winners 2K23</h1>
        <div className="col-lg-3 col-md-12 text-center winner text-center">
          <Card name="AAradhaya" branch="CSE" position="Winner" src={ank} />
          
        </div>

        {/* /.col-lg-4 */}
        <div className="col-lg-3 col-md-6 text-center winner text-center">
          <Card name="AAradhaya" branch="CSE" position="1st Runner up" src={ank} />
          
        </div>

        {/* /.col-lg-4 */}
        <div className="col-lg-3 col-md-6 text-center winner text-center">
          <Card name="AAradhaya" branch="CSE" position="2nd Runner up" src={ank} />
          
        </div>
        {/* /.col-lg-4 */}
      </div>



        {/* extra */}
        <hr className="featurette-divider" />
    </div>
    
  </main>
  </div>

  <Footer />
</>


        </>
    )
    ;
}