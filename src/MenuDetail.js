import React from "react";
import { useParams } from "react-router-dom";

const MenuDetail = ({ menuData, handleOrder }) => {
  const { id } = useParams();
  const selectedItem = menuData.find(
    (item) => item.orderId === parseInt(id, 10)
  );

  if (!selectedItem) {
    return <div>Menu item not found!</div>;
  }

  return (
    <div className="Menu-Details">
      <div className="card">
        <h2>The food you selected is {selectedItem.Food}</h2>
        <p>Price: ${selectedItem.price}</p>
        <p>Location: {selectedItem.place}</p>
        <button onClick={() => handleOrder(selectedItem)}>Order Now</button>
      </div>
    </div>
  );
};

export default MenuDetail;
