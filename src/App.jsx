import "./App.css";
import { Navbar } from "./components/layout//Navbar";
import ItemListContainer from "./components/pages/ItemListContainer";

function App() {
  return (
    <div>
      <h1 className="title">Rugbydump</h1>
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
