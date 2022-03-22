import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Pick from './components/Pick';

interface Props {}

const App = ({  }: Props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/pick" element={<Pick />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;