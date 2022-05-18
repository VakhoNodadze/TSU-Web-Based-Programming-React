import Product from '../components/Product'
import Loader from '../components/Loader/Loader'

const Cart = ({ products }) => {

  const renderData = () => (
    <>
      {
        products.map((product) => 
          <div className='w-1/2'>
            <Product key={product.id} product={product} />
          </div>
        )}
    </>
  )

  console.log('products', products)
    
  const renderContent = () => (
    <>
      {products.length === 0 ? <p className='mt-10'>Cart is empty</p>: renderData()}
    </>
  )
  return (
    <div className='flex flex-col flex-wrap items-center w-full'>
      {renderContent()}
    </div>
  )
}

export default Cart