import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { VotePage } from './pages/VotePage';
import { Resultspage } from './pages/ResultsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/vote' Component={VotePage} />
        <Route path='/results' Component={Resultspage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;