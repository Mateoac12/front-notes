import Footer from 'components/Footer';
import Home from 'pages/Home';
import React, { Suspense } from 'react'
import './App.css';

const Header = React.lazy(() => import('./components/Header'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
