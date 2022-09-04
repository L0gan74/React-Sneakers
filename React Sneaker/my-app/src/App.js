import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import About from "./About";
import Main from "./main";
import { Route, Routes } from "react-router-dom";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://630cd47983986f74a7cbc500.mockapi.io/Items`)
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get(`https://630cd47983986f74a7cbc500.mockapi.io/Cart`)
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post(`https://630cd47983986f74a7cbc500.mockapi.io/Cart`, obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://630cd47983986f74a7cbc500.mockapi.io/Cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id === id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onAddToFavorite = (obj) => {
    axios.post(`https://630cd47983986f74a7cbc500.mockapi.io/favorites`, obj);
    setFavorites((prev) => [...prev, obj]);
  };

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/abuot" element={<About />} />
      </Routes>
  );
}

export default App;
