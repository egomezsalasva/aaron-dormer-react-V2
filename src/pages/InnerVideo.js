//Library Imports
import React from 'react'
// import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components'
import cross from '../assets/icons/cross.svg'


//Styles
const ContainerInnerVideo$ = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: black;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
`
const Iframe$ = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
`
const CrossContainer$ = styled(HashLink)`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 40px;
  height: 40px;
`
const Cross$ = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`


function InnerVideo(props) {
    return (
      <>
       <ContainerInnerVideo$>
           <Iframe$ 
                src={props.videoSrc} 
                width="960" 
                height="540" 
                frameborder="0" 
                data-vimeo-responsive="1" 
                webkitallowfullscreen 
                mozallowfullscreen 
                allowfullscreen 
            />
            <CrossContainer$ to={props.hashLink}>
              <Cross$ src={cross}/>
            </CrossContainer$>
       </ContainerInnerVideo$>
      </>
    )
  }
  export default InnerVideo