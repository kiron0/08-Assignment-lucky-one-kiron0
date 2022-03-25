import React from 'react';
import './App.css';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Heroes from './Components/Heroes/Heroes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Heroes></Heroes>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;
