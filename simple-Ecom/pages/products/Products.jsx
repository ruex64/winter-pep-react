import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li><Link to="electronics">Electronics</Link></li>
        <li><Link to="fashion">Fashion</Link></li>
      </ul>
      <Outlet /> {/* This renders nested routes */}
    </div>
  );
};

export default Products;
