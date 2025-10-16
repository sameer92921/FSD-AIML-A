import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// function Book({ image, title, price }) {
//   return (
//     <div className="card">
//       <img src={image} width="200" height="200" alt={title} />
//       <h3>Title: {title}</h3>
//       <h4>Price: ₹{price}/-</h4>
//       <button>Add to Cart</button>
//     </div>
//   );
// }

// function App() {
//   const books = [
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_vuIWdS4z5Somcctla6_8buv6GTlsaZjOL8yQrvC_glExnt_M3Qrm0s&s",
//       title: "Physics",
//       price: 324,
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6K3QpO64FTrRcL8z9G0vXceux5I8JkD40s0YkP1ERFGJm3Zj5o1z7hQ&s",
//       title: "Chemistry",
//       price: 299,
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqM8eCXqVxjczXjIrjRUBx4EoR9tqeqp2Yb0fwQWbPzZ5bRBjJo1tQ&s",
//       title: "Mathematics",
//       price: 350,
//     },
//   ];

//   return (
//     <div className="book-list">
//       {books.map((book, index) => (
//         <Book
//           key={index}
//           image={book.image}
//           title={book.title}
//           price={book.price}
//         />
//       ))}
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
