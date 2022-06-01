import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './data'
import { useState } from 'react';

function App() {

  const {products} = data

  const [cartItems, setCartItems]= useState([])

  const addToCart =(product)=>{
    // update quantity
    const exist = cartItems.find(x => x.id === product.id)
    if (exist){
      setCartItems(cartItems.map((x)=> x.id === product.id ? {...exist, qty: exist.qty + 1} : x))
    }else {
      setCartItems([...cartItems, {...product, qty:1}])
    }
  }

  const removeCart =(product)=>{
    const exist = cartItems.find((x) => x.id === product.id)
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x)=> x.id !== product.id))
    }else {
      setCartItems(cartItems.map((x)=> x.id === product.id ? {...exist, qty: exist.qty - 1} : x))
    }
  }

  return (
    <div className="App">
      <Header countCartItem={cartItems.length} />
      <div className='row'>
        <Main products={products} addToCart={addToCart} />
        <Cart addToCart={addToCart} removeCart={removeCart} cartItems={cartItems} />
      </div>

    </div>
  );
}

export default App;
