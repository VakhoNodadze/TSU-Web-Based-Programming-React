import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Product from './pages/Product'

// **სავალდებულო
// გადააკეთეთ კლას კომპონენტები თანამედროვე ფუნქციურ კომპონენტებად.

// **დამატებითი
// შეძლებისდაგვარად გასტილეთ უკეთესად
// დაუმატეთ cartიდან წაშლის ფუნქციონალი
// დაუმატეთ ფუნქციონალი რომ ერთიდაიგივე აითემი, მრავალჯერ არ განმეორდეს,
// უბრალოდ იყოს რაოდენობა. მაგ: თუ ვიყიდი 3 ქურთუკს, უნდა მიჩანდეს რომ ვიყიდე 3 ცალი
// და არ გამომიჩნდეს 3ჯერ
// ასევე კარგი იქნება დაამატოთ, რაოდენობი გაზრდა-დაპატარავების ფუნქციონალი

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      products: [],
      cart: []
    }

  }

  componentDidMount(){
    this.setState((prevState) => {
      return { prevState, loading: true }
    })
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        this.setState((prevState) => {
          return { prevState, products: response.data, loading: false }
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState((prevState) => {
          return { prevState, loading: false }
        })
      })
  }

  handleAddProduct = (product) => {
    this.setState((prevState) => {
      return { prevState, cart: [...prevState.cart, product] }
    })
  }

  render(){
    const { products, loading, cart } = this.state
    return (
      <div className="flex flex-col">
        <Header itemCount={cart.length} />
        <Routes>
          <Route path='/' exact 
            element={<Products products={products} 
              handleAddProduct={this.handleAddProduct} 
              loading={loading} />} />
          <Route path='/products/:productId' exact element={<Product handleAddProduct={this.handleAddProduct} />} />
          <Route path='/cart' exact element={<Cart products={cart} />} />
        </Routes>
      </div>
    )

  }
}

export default App
