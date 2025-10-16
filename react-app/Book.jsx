function Book({ image, title, price }) {
  return (
    <div className="card">
      <img src={image} width="200" height="200" alt={title} />
      <h3>Title: {title}</h3>
      <h4>Price: ₹{price}/-</h4>
      <button>Add to Cart</button>
    </div>
  );
}

export default Book;
