import React from 'react'

import ProductCart from './ProductCard'

const Products = ({products, addToCart}) =>

  <div className='products-wrapper'>
    {products.map(product =>
      <ProductCart key={product.id} product={product} onClick={addToCart}/>
    )}
  </div>

export default Products
