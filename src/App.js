import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import { CurrencyProvider } from './CurrencyContext'
import Header from './components/Header';

function App() {
  return (
    <CurrencyProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/coin/:id' element={<Coin />} />
        </Routes>
      </BrowserRouter>
    </CurrencyProvider>
  );
}

export default App;
