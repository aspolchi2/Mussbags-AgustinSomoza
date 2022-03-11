import './App.css';
import Navbar from './components/header/navbar/Navbar';
import ItemListContainer from './components/main/Main';



function App() {
  return (
    <div>
      <header className="header">
        <Navbar />
      </header>
      <main>
        <ItemListContainer text={'hola'}/>
      </main>
    </div>
  );
}

export default App;
