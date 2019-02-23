import React from 'react'

const ProductCard = ({product, onClick}) =>

  <div className='product-card'>
    <h1>{product.name}</h1>
    <img src={product.imageSrc} alt={'Изображение ' + product.name}/>
    <h3>{product.price}</h3>
    <div
      className='product-add-to-cart'
      onClick={onClick.bind(null, product.id)}>Add to cart</div>
  </div>

export default ProductCard
