import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper">
      <Drawer/>

      <Header/>

      <div  className="content">
        <div className="content-info">
          <h1>All sneakers</h1>
        </div>

        <div className="search">
          <img width={16} height={16} src="/img/Search.svg" alt="Search"/>
          <input placeholder="Search..."/>
        </div>
      </div>

      <div  className="sneakers">
        <Card/>
      </div>
    </div>
  );
}

export default App;
