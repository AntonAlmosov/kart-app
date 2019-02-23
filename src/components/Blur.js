import React from 'react'

const Blur = ({cartShown, toggleCart}) =>

  <button
    onClick={toggleCart.bind()}
    className={cartShown ? 'blur' : 'display-none'}>
  </button>

export default Blur
