import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/coin/:id' element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
