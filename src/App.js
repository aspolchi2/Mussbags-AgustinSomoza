import './App.css';
import Navbar from './components/header/navbar/Navbar';
import ItemListContainer from './components/main/Main';



function App() {
  return (
    <body>
      <header className="header">
        <Navbar />
      </header>
      <main>
       <ItemListContainer />
      </main>
    </body>
  );
}

export default App;
