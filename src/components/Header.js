import React from 'react'

const Header = (props) => {
  const {countCartItem} = props
  console.log({countCartItem})
  return (
    <>
      <header className='row block center'>
        <div>
          <a href="#/">
            <h1>Small Shooping Cart</h1>
          </a>
        </div>
        <div>
          <a href="#/cart">
            
            Cart{' '}
            {countCartItem ? (
              <button className='badge'>{countCartItem}</button>
            ):""}
            
            </a>&nbsp;&nbsp;&nbsp;<a href="#/sign">Sign</a>
        </div>
      </header>
    </>
  )
}

export default Header