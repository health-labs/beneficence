import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Nav/Header';
import Footer from './components/Nav/Footer';
import WalletConnectContextProvider from './context/WalletConnectContextProvider';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Explore from './pages/Explore';
import CampaignPage from './pages/Campaign/CampaignPage';
import { LoadingAppProvider } from './context/LoadingApp';
import { SingleModalProvider } from './context/SingleModalContext';

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <WalletConnectContextProvider>
        <Header />
      </WalletConnectContextProvider>
      <BrowserRouter>
        <div className="h-auto w-full max-w-90rem mx-auto min-h-fit">
          <LoadingAppProvider>
            <SingleModalProvider>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />

                <Route path="/explore" element={<Explore />} />
                <Route path="/campaign/:id" element={<CampaignPage />} />
                <Route
                  path="*"
                  element={
                    <div className="error-empty font-bold text-xl">
                      Oops looks like you have hit an empty space.
                    </div>
                  }
                />
              </Routes>
            </SingleModalProvider>
          </LoadingAppProvider>
        </div>
      </BrowserRouter>
      <div className="bg-bene-dark-blue">
        <Footer />
      </div>
    </div>
  );
}

export default App;
