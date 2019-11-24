//Library Imports
import React, { useRef, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { TimelineMax, Power4, Power2 } from 'gsap/all'


//Styles
const VideoLink$ = styled(Link)`

`
const VideoContainer$ = styled.div`
    position: relative;
    width: 100vw;
    height: 70vh;
    overflow: hidden;
`
const Image$ = styled.img`
    position: absolute;
    width: 100%;
    height: 70vh;
    object-position: center;
    object-fit: cover;
`
const BlackOverlay$ = styled.div`
    position: absolute;
    width: 100%;
    height: 70vh;
    background: rgba(0,0,0,0.5);
`
const VideoTitleContainer$ = styled.div`
    position: absolute;
    top: 50%;
    left: 100px;
    transform: translateY(-50%);
`
const VideoTitle$ = styled.h2`
    color: white;
    text-transform: capitalize;
    font-size: 30px;
    font-family: "Swis721 BT", sans-serif;
`
const VideoSubtitle$ = styled.h3`
    color: white;
    text-transform: capitalize;
    font-size: 20px;
    margin-top: 3px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
`
// const ModalContainer$ = styled.div`
//     opacity: 0;
//     position: fixed;
//     width: 100vw;
//     height: 100vh;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     z-index: -1000;
// `
// const ModalOvelay$ = styled.div`
//     position: fixed;
//     width: 100vw;
//     height: 100vh;
//     background: rgba(0,0,0,0.8);
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
// `
// const Cross$ = styled.div`
//     position: absolute;
//     background: yellow;
//     width: 40px;
//     height: 40px;
//     right: 50px;
//     top: 50px;
// `

function Video(props) {

    // reference to the DOM node
    let videoTitleRef = useRef(null)
    let videoSubtitleRef = useRef(null)
    let videoImageRef= useRef(null)
    let blackOverlayRef = useRef(null)
    // let modalRef = useRef(null)
    // let modalOverlayRef = useRef(null)

    // Initialize to the animation
    const [onLoadTween] = useState(new TimelineMax())
    const [onHoverTween] = useState(new TimelineMax({ paused: true, reversed: true }))
    // const [modalTween] = useState(new TimelineMax({ paused: true }))
    // const [exitModalTween] = useState(new TimelineMax({ paused: true }))

    //Animation
    useEffect( () => {
        onLoadTween.from( videoTitleRef, 2, {opacity: 0, y: "-15", ease: Power4.easeOut } )
        onLoadTween.from( videoSubtitleRef, 2, {opacity: 0, y: "-15", ease: Power4.easeOut}, "-=1.6")
    }, [onLoadTween])

    useEffect( () => {
        onHoverTween.to( videoImageRef, 3, { scale: 1.05, ease: Power2.easeOut } )
        onHoverTween.to( blackOverlayRef, 3, { background: "rgba(0,0,0,0.1)", ease: Power2.easeOut }, "-=3" )
    }, [onHoverTween])

    // useEffect( () => {
    //     modalTween.to( modalRef, 0, { zIndex: 1000 })
    //     modalTween.to( modalRef, 0.4, { opacity: 1 } )
    // }, [modalTween])
    // useEffect( () => {
    //     exitModalTween.to( modalRef, 0.4, { opacity: 0 } )
    //     exitModalTween.to( modalRef, 0, { zIndex: "-1000" }) 
    // }, [exitModalTween])

    // const videoClickHandler = () => {
    //     modalTween.play()
    // }


    return (
        <VideoLink$ to={props.routeName} id={props.idProp}>
        <VideoContainer$ 
          onMouseEnter={() => onHoverTween.play()}
          onMouseLeave={() => onHoverTween.reverse()}
        //   onClick={videoClickHandler}
        >
          
            <Image$ src={props.imageSrc} ref={ ref => {videoImageRef = ref} }/>

            <BlackOverlay$ ref={ ref => {blackOverlayRef = ref} }></BlackOverlay$>

            <VideoTitleContainer$>
              <VideoTitle$ ref={ ref => {videoTitleRef = ref} } >{props.title}</VideoTitle$>
              <VideoSubtitle$ ref={ ref => {videoSubtitleRef = ref} }>{props.subtitle}</VideoSubtitle$>
            </VideoTitleContainer$>

            {/* <ModalContainer$ ref={ ref => {modalRef = ref}}>
                <ModalOvelay$ 
                    ref={ ref => {modalOverlayRef = ref}}
                    onClick={ () => exitModalTween.play()}
                />

                <Cross$ onClick={ () => exitModalTween.play()}/>

            </ModalContainer$> */}
         
        </VideoContainer$>
        </VideoLink$>
    )
}
  
  export default Video