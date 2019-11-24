//Library Imports
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//Componet Import
import Header from './components/Header/Header'
import Home from './pages/Home'
import InnerVideo from './pages/InnerVideo';


function App() {
  return (
    <Router>

      <Header />

      <Switch>
        <Route path="/" exact >
          <Home/>  
        </Route>
        <Route path="/keep-on-rolling">
          <InnerVideo 
            videoSrc="https://player.vimeo.com/video/137898988?autoplay=1&color=000&title=0&byline=0&portrait=0" 
            hashLink="/#keep-on-rolling"
          />  
        </Route>
        <Route path="/this-is-brotherhood">
          <InnerVideo 
            videoSrc="https://player.vimeo.com/video/336391184?autoplay=1&color=000&title=0&byline=0&portrait=0" 
            hashLink="/#this-is-brotherhood"
          />  
        </Route>
        <Route path="/this-is-us">
          <InnerVideo 
            videoSrc="https://player.vimeo.com/video/365079289?autoplay=1&color=000&title=0&byline=0&portrait=0"
            hashLink="/#this-is-us" 
          />  
        </Route>
        <Route path="/whats-your-journey">
          <InnerVideo 
            videoSrc="https://player.vimeo.com/video/299492406?autoplay=1&color=000&title=0&byline=0&portrait=0" 
            hashLink="/#whats-your-journey"
          />  
        </Route>
        <Route path="/navidad">
          <InnerVideo 
            videoSrc="https://player.vimeo.com/video/149365956?autoplay=1&color=000&title=0&byline=0&portrait=0" 
            hashLink="/#navidad"
          />  
        </Route>
      </Switch>
      
    </Router>
  )
}

export default App;
