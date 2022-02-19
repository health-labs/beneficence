import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import WalletConnectContextProvider from './context/WalletConnectContextProvider';

function App() {
  return (
    <div className="App">
      <WalletConnectContextProvider>
        <Header />
      </WalletConnectContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <div className="error-empty font-bold text-xl">
                Oops looks like you have hit an empty space.
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
