import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={About} path="/about" />
          <Route Component={Post} path="/post" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
