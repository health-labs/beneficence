import React from 'react';
import './App.css';
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
      <Home />
      <Footer />
    </div>
  );
}

export default App;
