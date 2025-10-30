import './App.css'
import Book from '../components/Book'
import books from './fakeDB';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
   return (
   <>
   <Header/>
   <div className="book-list">
      {books.map((book, index) => (
        <Book
          key={index}
          image={book.image}
          title={book.title}
          price={book.price}
        />
      ))}
    </div>
    <Footer/>
   </>
  );
}

export default App
