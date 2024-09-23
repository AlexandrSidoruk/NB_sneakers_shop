import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";

/*const arr = [
    {name: "New Balance 574", price: 1250, imageURL:"/img/sneakers/1.jpeg"},
    {name: "New Balance 327", price: 1200, imageURL:"/img/sneakers/2.jpeg"},
    {name: "New Balance 327", price: 1249, imageURL:"/img/sneakers/3.jpeg"},
    {name: "New Balance 574", price: 1250, imageURL:"/img/sneakers/4.jpeg"},
    {name: "New Balance 574", price: 1250, imageURL:"/img/sneakers/4.jpeg"},
    {name: "New Balance 574", price: 1250, imageURL:"/img/sneakers/4.jpeg"},
    {name: "New Balance 574", price: 1250, imageURL:"/img/sneakers/4.jpeg"},
    ];*/

function App() {
    const [cartOpened , setCartOpened] = useState(false);
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
      fetch('https://66ec45292b6cf2b89c5de98f.mockapi.io/items')
          .then(res => {return res.json()})
          .then(json => {setItems(json)});
  }, []);

  const onAddToCart= (obj) => {
      setCartItems(prev => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value)
  };

  return (
    <div className="wrapper">
     {cartOpened ? <Drawer items = {cartItems} onClose = {() => setCartOpened(false)}/> : null}

      <Header onClickCart = {() => setCartOpened(true) } />

      <div  className="content">
        <div className="content-info">
          <h1>All sneakers</h1>
        </div>

        <div className="search">
          <img width={16} height={16} src="/img/Search.svg" alt="Search"/>
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..."/>
        </div>
      </div>

      <div  className="sneakers">
          {items
              .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj) => (
              <Card key={obj.imageURL}
                    name={obj.name}
                    price={obj.price}
                    imageURL={obj.imageURL}
                    onFavorite={()=> console.log(1)}
                    onPlus={(obj)=> onAddToCart(obj)}
              />
          ) )
          }
      </div>
    </div>
  );
}

export default App;
