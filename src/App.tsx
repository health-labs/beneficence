import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Nav/Header';
import Footer from './components/Nav/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Explore from './pages/Explore';
import CampaignPage from './pages/Campaign/CampaignPage';
import AppCtxProvider from './context';
import StartCampaign from './pages/StartCampaign';
import CVoting from './pages/Campaign/CVoting';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <AppCtxProvider>
        <Header />
        <BrowserRouter>
          <div className="bene-body h-auto w-full max-w-90rem mx-auto min-h-fit">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/start-a-fund" element={<StartCampaign />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/campaign/:id/:tab" element={<CampaignPage />} />
              <Route
                path="/campaign/:id/:tab/vote/:vid"
                element={<CVoting />}
              />
              <Route
                path="*"
                element={
                  <div className="error-empty font-bold text-xl p-16">
                    Oops looks like you have hit an empty space.
                  </div>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
        <div className="bg-bene-dark-blue">
          <Footer />
        </div>
      </AppCtxProvider>
    </div>
  );
}

export default App;
