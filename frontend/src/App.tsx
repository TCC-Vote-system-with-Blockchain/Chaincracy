import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { VotePage } from './pages/VotePage';
import { Resultspage } from './pages/ResultsPage';
import { AddPositionPage } from './pages/AddPositionPage';
import { AddCandidate } from './pages/AddCandidatePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/vote' Component={VotePage} />
        <Route path='/results' Component={Resultspage} />
        <Route path='/add-candidate' Component={AddCandidate} />
        <Route path='/add-position' Component={AddPositionPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;