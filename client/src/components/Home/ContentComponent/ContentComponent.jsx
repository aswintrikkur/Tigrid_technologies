import React from 'react'
import './ContentComponent.scss'

export const ContentComponent = ({colorWhite, children}) => {
  return (
    <div className='content-component-container' style={{color:colorWhite&&'white'}}> 
    { children}
    </div>
  )
}
