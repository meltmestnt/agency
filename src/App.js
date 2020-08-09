import React from "react";
import gsap from 'gsap';
import "./styles/App.scss";
import Header from './components/Header';
import Banner from './components/Banner';
import Cases from './components/Cases';
import Intro from './components/Intro';
function App() {

  React.useEffect(() => {
    // add additional space to viewport height to handle top and bottom bars on mobile devices
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    // prevent flashing on load
    gsap.to("body", 0, {css: {visibility: 'visible'}})
    // timeline
    const tl = gsap.timeline();


    // use useRef instead!
    tl.from('.line span', 1.8, {
      y: 100,
      ease: 'power4.out',
      delay: .5,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    })
      .to('.overlay-top', 1.6, {
        height: 0,
        ease: 'expo.inOut',
        stagger: .4
      })
      .to('.overlay-bottom', 1.6, {
        width: 0,
        ease: 'expo.inOut',
        delay: -.8,
        stagger: {
          amount: .4
        }
      })
      .to('.intro-overlay', 0, {
        css: {
          display: 'none'
        }
      })
      .from('.case-image img', 1.6, {
        scale: 1.4,
        ease: 'expo.inOut',
        delay: -2,
        stagger: {
          amount: .4
        }
      })

  }, [])
  return (
    <div className='App'>
      <Intro></Intro>
      <Header></Header>
      <Banner></Banner>
      <Cases></Cases>
    </div>
  );
}

export default App;
