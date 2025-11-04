import { useState, useEffect } from 'react';
import './App.css';
import Header from '../components/Header';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const handleIncrement = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalCartPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <h3>Price: ${product.price.toFixed(2)}</h3>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
              <Cart
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                quantity={item.quantity}
                onRemove={() => removeFromCart(item.id)}
                onIncrement={() => handleIncrement(item.id)}
                onDecrement={() => handleDecrement(item.id)}
              />
            ))}
            <div className="total-price">
              <h3>Total Cart Price: ${totalCartPrice.toFixed(2)}</h3>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;