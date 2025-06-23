import './App.css';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';




function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '2rem' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;


