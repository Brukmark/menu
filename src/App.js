import React, { useState } from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";
import Create from "./Create";
import MenuDetail from "./MenuDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [menuData, setMenuData] = useState([
    { Food: "pizza", price: 300, place: "bole", orderId: 1 },
    { Food: "Burger", price: 500, place: "Bethel", orderId: 2 },
    { Food: "Lazagna", price: 650, place: "Sarbet", orderId: 3 },
    { Food: "tellateli", price: 800, place: "4kilo", orderId: 4 },
  ]);

  const handleOrder = (selectedItem) => {
    console.log(`Order placed for ${selectedItem.Food}`);
  };

  // Callback function to update menuData
  const handleMenuAdd = (newMenu) => {
    setMenuData((x) => [...x, { ...newMenu, orderId: x.length + 1 }]);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Menu menuData={menuData} />
            </Route>
            <Route path="/Create">
              <Create onMenuAdd={handleMenuAdd} />
            </Route>
            <Route path="/Menu/:id">
              <MenuDetail menuData={menuData} handleOrder={handleOrder} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
