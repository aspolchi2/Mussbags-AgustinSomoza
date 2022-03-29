import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path='*' element={<Navigate to ='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
