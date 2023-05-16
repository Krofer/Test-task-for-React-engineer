import React, { useEffect } from 'react';

import './App.css';
import { HeroesResponse } from "../types";
import { addHeroesActionCreator, addHeroesPaginationActionCreator } from "../store/heroes";
import { getHeroesData } from "../helper";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Heroes } from "./components/Heroes";

function App() {
  const { heroes } = useAppSelector((state) => state.heroes);
  const dispatch = useAppDispatch()

  useEffect(() => {
    getHeroesData().then((data: HeroesResponse) => {
      dispatch(addHeroesActionCreator(data.results))
      dispatch(addHeroesPaginationActionCreator({
        next: data.next,
        previous: data.previous,
        count: data.count
      }))
    });
  }, [dispatch])

  return (
    <div className="container mx-auto">
      <h1 className='text-3xl text-center mb-10'>Heroes list</h1>
      <Heroes heroes={heroes} />
    </div>
  );
}

export default App;
