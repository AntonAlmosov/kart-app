import React, { Component } from 'react';
import uuid from 'uuid'
import images from './ImageStore'
import './../styles/style.scss';

import Header from './Header'
import Cart from './Cart'
import Products from './Products'


//Стилилизовать это все
//Добавить хендлер если корзина пустая

class App extends Component {
  constructor() {
    super()

    this.state = {
      products: [
        {
          id: uuid.v4(),
          name: 'Наушники Beats urBeats3 Lightning',
          price: 5490,
          imageSrc: images.urBeat
        },
        {
          id: uuid.v4(),
          name: 'Apple HomePod Space Gray',
          price: 26990,
          imageSrc: images.homepod
        },
        {
          id: uuid.v4(),
          name: 'Apple MacBook Air 13 (2018)',
          price: 146990,
          imageSrc: images.macBookAir
        },
        {
          id: uuid.v4(),
          name: 'Apple TV 4 64 Gb',
          price: 14490,
          imageSrc: images.appleTV
        },
        {
          id: uuid.v4(),
          name: 'Apple iMac 5K 27"',
          price: 128990,
          imageSrc: images.iMac
        }
      ],
      inCart: [],
      cartShown: false,
    }
  }


  render() {
    return (
      <div className="kart-app-wrapper">
        <Header>
          <Cart
            inCart={this.state.inCart}
            cartShown={this.state.cartShown}
            toggleCart={this.toggleCart}
            removeFromCart={this.removeFromCart}/>
        </Header>
        <Products products={this.state.products} addToCart={this.addToCart} />
      </div>
    );
  }

  toggleCart = () => {
    if(this.state.cartShown)
      this.setState({
        cartShown: false
      })
    else
      this.setState({
        cartShown: true
      })
  }

  removeFromCart = (id) => {
    this.setState({
      inCart: this.state.inCart.filter(product => product.id !== id)
    })
  }

  addToCart = (id) => {
    if (this.state.inCart.length === 0)
      this.setState({
        inCart: [...this.state.products.filter(product => product.id === id)]
      })
    else
      this.setState({
        inCart: [...this.state.inCart,
        ...this.state.products.filter(product => product.id === id)]
      })
  }
}

export default App
