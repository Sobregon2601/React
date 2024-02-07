import "./Cart.css";
import { TiShoppingCart } from "react-icons/ti";

const Cart = () => {
  return (
    <div className="carrito">
      <h3>carrito</h3>
      <span>10</span>
      <TiShoppingCart color="blue" />
    </div>
  );
};

export default Cart;
