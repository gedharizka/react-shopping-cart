import React from 'react'
import Product from './Product'

const Main = (props) => {
  const {products,addToCart} = props
  return (
    <main className='block col-2'>
      <h2>Product</h2>
      <div className="row">
        {products.map((product)=>(
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </main>
  )
}

export default Main