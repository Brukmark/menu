import React, { useState } from "react";
import MenuList from "./MenuList";

const Menu = ({ menuData }) => {
  const [menuList, setMenuList] = useState(menuData);

  // In Menu.js
  const handleDelete = (orderId) => {
    const updateMenu = menuList.filter((menu) => menu.orderId !== orderId);
    setMenuList(updateMenu);
  };

  // const handleDelete = (orderId) => {
  //   const updatedMenu = menuList.filter((menu) => menu.orderId !== orderId);
  //   setMenuList(updateMenu);  };

  return (
    <div className="menu">
      <MenuList
        menuList={menuList}
        Title="TODAY's MENU"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Menu;
