import React, { Suspense } from 'react'
import { Route } from 'wouter'

import LoginContextProvider from 'context/LoginContext'
import ContextNotesProvider from 'context/contextNotes'

import Home from 'pages/Home';
import Register from 'pages/Register';
import CreatedUser from 'pages/CreatedUser';

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
        <ContextNotesProvider fallback={null}>
          <Route
            path='/'
            component={Home}
          />
        </ContextNotesProvider>
        <Route
          path='/register'
          component={Register}
        />
        <Route
          path='/created-user'
          component={CreatedUser}
        />
        <Footer />
        <BannerWave />
        </LoginContextProvider>
    </div>
  );
}

export default App;
