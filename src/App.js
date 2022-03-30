import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './components/main/ItemListContainer/ItemListContainer';
import { useEffect, useState } from 'react';
import { getStock } from './components/main/ItemList/ItemList';


function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
      getStock
      .then((data) => setItems(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/category/:categoryId' element={ <ItemListContainer url={res.url} name={res.name} id={res.id} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
