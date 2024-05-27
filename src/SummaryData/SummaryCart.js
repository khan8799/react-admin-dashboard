import "./SummaryCart.css";
import SummaryDetail from "./SummaryDetail";

function SummaryCart() {
  const cart = [
    {
      id: 1,
      price: "$ 15,0000",
      des: "ncreased by 60%",
      name: "Weekly Sales ",
    },
    {
      id: 2,
      price: "$ 15,0000",
      des: "ncreased by 60%",
      name: "Weekly Sales ",
    },
    {
      id: 3,
      price: "$ 15,0000",
      des: "ncreased by 60%",
      name: "month Sales ",
    },
  ];
  
  return (
    <>
      <div className="container">
        <div className="row">
          {cart.map((carts) => {
            return <SummaryDetail key={carts.id} carts={carts} />;
          })}
        </div>
      </div>
    </>
  );
}

export default SummaryCart;
