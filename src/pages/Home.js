//Library Imports
import React from 'react'
import { Link } from "react-router-dom"
//Component Imports
import Video from '../components/Home/Video'
//Image Imports
import keepOnRolling from '../assets/images/keepOnRolling.jpg'
import thisIsBrotherhood from '../assets/images/thisIsBrotherhood.jpg'
import thisIsUs from '../assets/images/thisIsUs.jpg'
import whatsYourJourney from '../assets/images/whatsYourJourney.jpg'
import navidad from '../assets/images/unKilo.jpg'


function Home() {
    return (
      <>
        <Video 
          imageSrc={keepOnRolling} 
          title="Keep On Rolling" 
          subtitle="Rizla"
          routeName="/keep-on-rolling"
          idProp="keep-on-rolling"
        />
        <Video 
          imageSrc={thisIsBrotherhood} 
          title="This Is Brotherhood"
          subtitle="Brotherhood"
          routeName="/this-is-brotherhood"
          idProp="this-is-brotherhood"
        />
        <Video 
          imageSrc={thisIsUs} 
          title="This Is Us"
          subtitle="Surf Spirit"
          routeName="/this-is-us"
          idProp="this-is-us"
        />
        <Video 
          imageSrc={whatsYourJourney} 
          title="What's Your Journey?"
          subtitle="Kia"
          routeName="/whats-your-journey"
          idProp="whats-your-journey"
        />
        <Video 
          imageSrc={navidad} 
          title="Navidad" 
          subtitle="Un Kilo De Alimento Un Kilo De Esperanza"
          routeName="/navidad"
          idProp="navidad"
        />
      </>
    )
  }
  export default Home