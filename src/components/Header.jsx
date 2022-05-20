import React from 'react'
import { Link } from 'react-router-dom'

import { useStore } from '../store/StoreContext'


const Header = () => {
  const { state: { cart } } = useStore()

  console.log('context')
  return (
    <div className='flex items-center justify-between px-10 bg-slate-700 h-14'>
      <Link to='/' className='text-white cursor-pointer'>
          Ecomerce
      </Link>
      <Link to='/cart' className='text-xl text-white cursor-pointer'>
          Cart{cart.length > 0 && `(${cart.length})`}
      </Link>
    </div>
  )

}


export default Header