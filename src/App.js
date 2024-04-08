import Card from './components/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: "12 999 руб.", imageUrl:'/img/sneakers/1.jpeg'},
  {title: 'Мужские Кроссовки Nike Air Max 270', price: "12 999 руб.", imageUrl:'/img/sneakers/2.jpeg'},
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: "8 499 руб.", imageUrl:'/img/sneakers/3.jpeg'},
  {title: 'Кроссовки Puma X Aka Boku Future Rider', price: "8 999 руб.", imageUrl:'/img/sneakers/4.jpeg'}
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content p-40 ">
        <div className="d-flex mb-40 align-center  justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="../img/search.svg" alt="search" />
            <input placeholder="Поиск ..."></input>
          </div>
        </div>

        <div className="d-flex">

        {arr.map((obj) => ((
        <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} onClick={() => console.log(obj)} />
        )))}

        </div>

      </div>
    </div>
  );
}

export default App;

