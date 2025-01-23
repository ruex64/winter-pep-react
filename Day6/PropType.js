import PropTypes from 'prop-types';

function Product({ name, price, isAvailable }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>{isAvailable ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isAvailable: PropTypes.bool.isRequired,
};

export default Product;
