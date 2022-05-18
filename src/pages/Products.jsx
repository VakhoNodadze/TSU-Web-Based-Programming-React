import React from 'react'
import { Link } from 'react-router-dom'

import Product from '../components/Product'
import Loader from '../components/Loader'

const Products = ({ products, loading, handleAddProduct }) => {
    
  const renderData = () => (
    <>
      {
        products.map((product) => 
          <>
            <Link to={`/products/${product.id}`} className=' flex flex-col w-1/2'>
              <Product key={product.id} product={product} />
            </Link>
            <button className='bg-blue-400 p-2 mt-4 ml-10 text-white'
              onClick={() => handleAddProduct(product)}
            >Add to Cart
            </button>
          </>
        )
      }
    </>
  )


  const renderContent = () => (
    <>
      {loading ? <Loader /> : renderData()}
    </>
  )

  return (
    <div className='flex flex-col flex-wrap items-center w-full'>
      {renderContent()}
    </div>
  )
}

export default Products