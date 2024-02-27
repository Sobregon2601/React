import { ProductCard } from "../../common/ProductCard";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <div>
        <h2 style={{ color: "white" }}>{greeting}</h2>
      </div>
      ;<h2 style={{ color: "white" }}>Productos</h2>
      <ProductCard
        producto={"Hombreras"}
        desc={"Hombreras alcolchadas"}
        precio={1200}
      />
      <ProductCard
        producto={"Protector Bucal"}
        desc={"Protector simple"}
        precio={100}
      />
      <ProductCard
        producto={"Tee"}
        desc={"Pateador de plastico"}
        precio={1000}
      />
      <ProductCard
        producto={"Botines"}
        desc={"Botines con tapones de aluminio"}
        precio={1500}
      />
    </div>
  );
};

return <ItemList />;

export default ItemListContainer;
