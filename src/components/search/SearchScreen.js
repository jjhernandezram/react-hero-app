import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import queryString from 'query-string';

import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../helpers/getHeroByName';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [ { searchText }, handleInputChange ] = useForm({ searchText: q });

  const heroList = useMemo(() => getHeroByName(q), [ q ]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search Screen</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h5>Search</h5>
          <hr/>
          <form onSubmit={handleSearch}>
            <input type="text"
                   placeholder="Search hero..."
                   className="form-control"
                   name="searchText"
                   value={searchText}
                   onChange={handleInputChange}
                   autoComplete="off"/>

            <button className="btn btn-outline-primary mt-3" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h5>Results</h5>
          <hr/>

          {
            (q === '')
              ? <div className="alert alert-primary">Search for a hero!</div>
              : (heroList.length === 0) && <div className="alert alert-warning">No hero found for {q}</div>
          }

          {
            heroList.map(hero => (<HeroCard key={hero.id} hero={hero}/>))
          }
        </div>
      </div>
    </>
  );
};