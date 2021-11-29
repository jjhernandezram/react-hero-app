import { Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';

import { MarvelScreen } from '../components/marvel/MavelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {

  return (
    <>
      <Navbar/>
      <div className="container m-10">
        <Routes>
          <Route path={'marvel'} element={<MarvelScreen/>}/>
          <Route path={'dc'} element={<DcScreen/>}/>
          <Route path={'hero/:heroId'} element={<HeroScreen/>}/>
          <Route path={'search'} element={<SearchScreen/>}/>

          <Route path={'/'} element={<MarvelScreen/>}/>
        </Routes>
      </div>
    </>
  );
};