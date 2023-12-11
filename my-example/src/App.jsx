import { useState } from 'react'


// src/App.jsx
import './App.css';
import React from 'react';
const heading = <h1>Say hello to ReactJS</h1>;
import ironhackLogo from './assets/ironhack-logo-xs.png';
import menu from './assets/menu-top-xs.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';
const title1 = <h2>Declarative</h2>;
const title2 = <h2>Components</h2>;
const title3 = <h2>Single-Way</h2>;
const title4 = <h2>JSX</h2>;
const text1 = <p>React makes it painless to create interactive UIs.</p>;
const text2 = <p>Build encapsulated components that manage thier state.</p>;
const text3 = <p>A set of immutable values are passed to the component's.</p>;
const text4 = <p>Statically-typed. designed to run on modern browsers.</p>;


const text = <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>

function App() {
  return (
    <>
    <div className='header'>
    <div className='nav' >
   
      <img src={ironhackLogo} alt='ironhack logo' />
      <img src={menu} alt='menu logo' />
      </div>

        <div className='intro'>
       {heading}
        
        <div>
         {text}
     </div>
    <button> Awesome! </button>
    </div>
    </div>
    <br/>
    <div className='encapsulate'>
    <div className='logo'>
    <img src={icon1} alt='icon1 logo' />
    <img src={icon2} alt='icon2 logo' />
    <img src={icon3} alt='icon3 logo' />
    <img src={icon4} alt='icon4 logo' /> 
    </div>
    <div className='titles'>
      {title1}
      {title2}
      {title3}
      {title4}
      </div>
    <div className='texts'>
    {text1}
    {text2}
    {text3}
    {text4}

    </div>
    </div>

    </>
  );
}

export default App;