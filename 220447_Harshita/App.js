import logo from './logo.svg';
import './App.css';
import React from 'react';
import navbar from './components/navbar';
import home from './components/home';
import education from './components/education';
import achievements from './components/achievements';
import hobbies from './components/hobbies';
import contact from './components/contact';
import form from './components/form';

function App() {
  return (
    <>
      <navbar />
      <home/>
      <education />
      <achievements />
      <hobbies />
      <contact />
      <form />
      
    </>
  ); 
}

export default App;
