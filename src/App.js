import Card from './components/Card/Card'
import axios from 'axios'
import Header from './components/Header'
import Drawer from './components/Drawer'
import React from 'react';


function App() {
  const [items,setItems] = React.useState([]);
  const [cartItems,setCartItems] = React.useState([]);
  const [searchValue,setSearchValue] = React.useState('');
  const [cardOpened,setCartOpened] = React.useState(false);
  
  React.useEffect(() => {
    axios.get('https://66153e44b8b8e32ffc7a5c0e.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://66153e44b8b8e32ffc7a5c0e.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);
   

  const onAddToCart = (obj) => {
    axios.post('https://66153e44b8b8e32ffc7a5c0e.mockapi.io/cart',obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://66153e44b8b8e32ffc7a5c0e.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id != id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">

      {cardOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)}/>

      <div className="content p-40 ">
        <div className="d-flex mb-40 align-center  justify-between">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="../img/search.svg" alt="search" />
           { searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="../img/btn-remove.svg" alt="clear"/>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..."></input>
          </div>
        </div>

        <div className="d-flex flex-wrap">

        {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item,index) => ((
        <Card 
        key={index}
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

