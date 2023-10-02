import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { VotePage } from './pages/VotePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/vote' Component={VotePage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;