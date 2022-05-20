import { Component } from 'react'
import axios from 'axios'

import Loader from '../components/Loader'
import { withRouter } from '../utils/withRouter'
import { StoreContext } from '../store/StoreContext'
import { ACTION_TYPE } from '../store/actionTypes'

class Product extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      loading: false,
      product: {}
    }
  }
  


  componentDidMount(){
    this.setState((prevState) => {
      return { prevState, loading: true }
    })
    axios
      .get(`https://fakestoreapi.com/products/${this.props.params.productId}`)
      .then((response) => {
        this.setState((prevState) => {
          return { prevState, product: response.data, loading: false }
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState((prevState) => {
          return { prevState, loading: false }
        })
      })
  }

  render(){
    const { product, loading } = this.state 

    const renderProduct = () => (
      <StoreContext.Consumer>
        {
          ({ dispatch }) => {
            return <div className='flex flex-col items-center w-1/2 mt-20'>
              <h1>{product.title}</h1>
              <img src={product.image} className='w-40 h-40' />
              <p className='mt-4'>{product.description}</p>
              <div className='flex justify-between w-full mt-6'>
                <p>Rating: {product.rating.rate}</p>
                <p>Price: ${product.price}</p>
              </div>
              <button className='z-50 p-2 mt-4 text-white bg-blue-500 rounded-lg w-28'
                onClick={() => dispatch({ type: ACTION_TYPE.ADD_PRODUCT_TO_CART, payload: product })}>Add to Cart</button>
            </div>
          }
        }
      </StoreContext.Consumer>
    )

    const renderContent = () => (
      <>
        {!product.id ? <Loader /> : renderProduct()}
      </>
    )
    return(
      <div className='flex flex-col items-center w-full h-screen'>
        {renderContent()}
      </div>
    )
  }
}

export default withRouter(Product) // withRouter is a HOC. Look it up