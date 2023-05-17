import React from 'react';

import { useAppSelector } from "../../hooks";
import { Heroes, Loader, Pagination, SearchBar } from "../../components";

export const MainPage = () => {
  const { heroes, loading } = useAppSelector((state) => state.heroes);

  return (
    <div className="container mx-auto">
      <h1 className='text-3xl text-center mb-10'>List of Heroes</h1>
      <SearchBar/>
      <div className='relative'>
        {loading === 'pending' && <Loader/>}
        <Heroes heroes={heroes}/>
      </div>
      <Pagination/>
    </div>
  );
}
