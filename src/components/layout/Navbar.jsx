import "./Navbar.css";
import Cart from "../common/Cart";

export const Navbar = () => {
  return (
    <div className="barraNav">
      <h2>logo</h2>
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
