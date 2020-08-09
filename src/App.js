import React from "react";
import "./styles/App.scss";
import Header from './components/Header';
import Banner from './components/Banner';
import Cases from './components/Cases';
function App() {

  React.useEffect(() => {
    // add additional space to viewport height to handle top and bottom bars on mobile devices
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])
  return (
    <div className='App'>
      <Header></Header>
      <Banner></Banner>
      <Cases></Cases>
    </div>
  );
}

export default App;
