import React from 'react'

import CartModal from './CartModal'
// import Blur from './Blur'

const Cart = ({ inCart, cartShown, toggleCart, removeFromCart }) =>

  <div className='kart-wrapper'>
    <div className='kart-button' onClick={toggleCart.bind()}>
      <div className={(inCart.length === 0) ? 'display-none' : 'kart-status'}>
        {inCart.length}
      </div>
    </div>
    {/* <Blur cartShown={cartShown} toggleCart={toggleCart} />*/}
    <CartModal inCart={inCart} cartShown={cartShown} removeFromCart={removeFromCart} />
  </div>

export default Cart
