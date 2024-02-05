import React from "react";
import { Link } from "react-router-dom";

const MenuList = ({ menuList, Title, handleDelete }) => {
  return (
    <div className="MenuList">
      <h2>{Title}</h2>
      {menuList.map((menu) => (
        <div className="Menu-preview" key={menu.orderId}>
          <Link to={`/Menu/${menu.orderId}`}>
            <h2>{menu.Food}</h2>
            <p>Price: {menu.price}</p>
            <p>Place: {menu.place}</p>
          </Link>
          <button onClick={() => handleDelete(menu.orderId)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
