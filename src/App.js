import Card from './components/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import React from 'react';


function App() {
  const [items,setItems] = React.useState([]);
  const [cartItems,setCartItems] = React.useState([]);
  const [cardOpened,setCartOpened] = React.useState(false);
  
  React.useEffect(() => {
    fetch('https://66153e44b8b8e32ffc7a5c0e.mockapi.io/items')
    .then(res => {
      return res.json();
    })
    .then((json) => {
      setItems(json)
    });
  }, []);
   

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">

      {cardOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)}/>

      <div className="content p-40 ">
        <div className="d-flex mb-40 align-center  justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="../img/search.svg" alt="search" />
            <input placeholder="Поиск ..."></input>
          </div>
        </div>

        <div className="d-flex flex-wrap">

        {items.map((item) => ((
        <Card 
        title={item.title} 
        price={item.price} 
        imageUrl={item.imageUrl} 
        onFavorite={() => console.log('Save')}
        onPlus={(obj) => onAddToCart(obj)} />
        )))}

        </div>

      </div>
    </div>
  );
}

export default App;

