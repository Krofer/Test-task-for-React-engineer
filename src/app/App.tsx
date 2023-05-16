import React, { useEffect } from 'react';

import { getHeroes } from "../store/heroes";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Heroes, Loader, Pagination, SearchBar } from "./components";

function App() {
  const { heroes, loading } = useAppSelector((state) => state.heroes);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getHeroes())
  }, [dispatch])

  return (
    <div className="container mx-auto">
      <h1 className='text-3xl text-center mb-10'>List of Heroes</h1>
      <SearchBar />
      <div className='relative'>
        {loading === 'pending' && <Loader />}
        <Heroes heroes={heroes}/>
      </div>
      <Pagination/>
    </div>
  );
}

export default App;
