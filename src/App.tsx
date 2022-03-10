import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

interface Props {}

const App = ({  }: Props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <h1>Hello, World!</h1>
      </div>
    </BrowserRouter>
  );
};

export default App;