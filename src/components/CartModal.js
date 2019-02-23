import React from 'react'

const CartModal = ({inCart, cartShown, removeFromCart}) =>

  <div className={cartShown ? 'cart-modal' : 'display-none'}>
    {inCart.map(product =>
      <div className='cart-modal-product' key={product.id}>
        <h2>{product.name}</h2>
        <span>{product.price}</span>
        <div
        onClick={removeFromCart.bind(null, product.id)}
        className='cart-modal-remove-product'>X</div>
      </div>
    )}
  </div>

export default CartModal
