export const ProductCard = ({ producto, desc, precio }) => {
  return (
    <div style={{ border: "1px solid white", color: "white" }}>
      <h3>{producto}</h3>
      <h4>{desc}</h4>
      <h4>{precio}</h4>
    </div>
  );
};
