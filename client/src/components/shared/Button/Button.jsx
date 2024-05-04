import React from 'react'
import './Button.scss'

export const PrimaryButton = ({text,width,fontLight}) => {
  return (
    <div className='primary-button-container'>
        <button style={{width:width, fontWeight:fontLight?'300':'600'}} >{text}</button>
    </div>
  )
}
