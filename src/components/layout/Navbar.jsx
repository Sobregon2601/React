import "./Navbar.css";
import Cart from "../common/Cart";
import { GiRugbyConversion } from "react-icons/gi";

export const Navbar = () => {
  return (
    <div className="barraNav">
      <GiRugbyConversion size={80} />
      <nav className="barraNav">
        <ul className="barraNav">
          <li>Equipamiento</li>
          <li>Clubes</li>
          <li>Selecciones</li>
        </ul>
        <Cart />
      </nav>
    </div>
  );
};
