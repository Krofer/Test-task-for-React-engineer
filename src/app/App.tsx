import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import { State } from "../types/state";

function App() {
  const heroes = useSelector((state: State) => state.heroes);

  console.log(heroes)

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
