import "./App.css";
import { Navbar } from "./components/layout//Navbar";
import ItemListContainer from "./components/pages/ItemListContainer";

function App() {
  return (
    <div className="main">
      <h1 className="title">Rugbydump</h1>
      <Navbar />
      <ItemListContainer saludo={"Bienvenido a Rugbydumop"} />
    </div>
  );
}

export default App;
