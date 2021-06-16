import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDark, setIsDark] = useState(false);

  const setTheme = () => {
    setIsDark((isDark) => !isDark);
  }

  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={setTheme}>
          {isDark ? "DARK MODE" : "LIGHT MODE"}
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
