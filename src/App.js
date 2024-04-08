import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
function App() {
  return (
    <div className="wrapper clear">
      <Header/>
      <Drawer/>
      <div className="content p-40 ">
        <div className="d-flex mb-40 align-center  justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="../img/search.svg" alt="search" />
            <input placeholder="Поиск ..."></input>
          </div>
        </div>

        <div className="d-flex">
         <Card/>
         <Card/>
         <Card/>
         <Card/>
        </div>

      </div>
    </div>
  );
}

export default App;

