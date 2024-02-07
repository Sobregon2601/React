import Cart from "../common/Cart";

export const Navbar = () => {
  return (
    <div>
      <h2>logo</h2>
      <nav>
        <ul>
          <li className="barraNav"> Equipamiento</li>
          <li className="barraNav">Clubes</li>
          <li className="barraNav">Selecciones</li>
        </ul>
        <Cart />
      </nav>
    </div>
  );
};

/* export const Navbar =()=> {
    return <h1>Eeste es el navbar</h1>
}*/
