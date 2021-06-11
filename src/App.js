import React, { Suspense } from 'react'
import LoginContextProvider from 'context/LoginContext';

import Home from 'pages/Home';

import BannerWave from 'components/BannerWave';
import Footer from 'components/Footer';

import './App.css';

const Header = React.lazy(() => import('./components/Header'))

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <Home />
        <Footer />
        <BannerWave />
        </LoginContextProvider>
    </div>
  );
}

export default App;
