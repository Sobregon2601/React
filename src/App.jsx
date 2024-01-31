import { ProductCard } from "./components/common/ProductCard"
import Navbar from "./components/layout/Navbar"

const App= ()=> {


  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
      <ProductCard/>

      <h1 className="title">Titulo</h1>
    </div>
  )
}

export default App
