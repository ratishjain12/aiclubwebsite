import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import styled from 'styled-components'

function ScrollToTop() {
    const [isVisible, setisVisible] = useState(false)

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const listenToScroll = () => {
        let visibilityHeight = 200
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        if(winScroll > visibilityHeight){
            setisVisible(true)
        }
        else{
            setisVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])    

    return (
        <Wrapper>
            {isVisible && (
                <div className='top-btn' onClick={scrollTop}> 
                    <ArrowUpwardIcon className='top-btn--icon' sx={{fontSize: 30}}/>
                </div> 
            )}
               
        </Wrapper>
        
    )
}

const Wrapper = styled.section`
    position:fixed;
    width:50px;
    height:50px;
    bottom:30px;
    right:20px;
    justify-content: center;
    align-items: center;
    .top-btn{
        justify-content: center;
        align-items: center;
        right:30px;
        height: 50px;
        width: 50px;
        background-color: #342F3B;
        color:#FFF;
        border-radius:50px;
        text-align:center;
        box-shadow: 2px 2px 3px gray;

        &--icon {
            animation: gototop 1.2s linear infinite alternate-reverse;
          }
      
          @keyframes gototop {
            0% {
              transform: translateY(-0rem);
            }
            100% {
              transform: translateY(1rem);
            }
          }
    }

`;


export default ScrollToTop
