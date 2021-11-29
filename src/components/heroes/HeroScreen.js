import React, { useMemo } from 'react';
import { useNavigate, Navigate, useParams } from 'react-router-dom';

import { getHeroById } from '../../helpers/getHeroById';

const heroImages = require.context('../../assets', true);

export const HeroScreen = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [ heroId ]);

  if (!hero) return <Navigate to="/"/>;

  const { publisher, superhero, alter_ego, characters, first_appearance, id } = hero;

  const handleReturn = () => {
    const nav = (publisher === 'DC Comics') ? 'dc' : 'marvel';
    navigate(`/${nav}`);
  };

  console.log(heroImages(`./${id}.jpg`));

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img src={heroImages(`./${id}.jpg`).default} alt={superhero} className="img-thumbnail"/>
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group">
            <li className="list-group-item"><b>Alter ego: </b> {alter_ego}</li>
            <li className="list-group-item"><b>Publisher: </b> {publisher}</li>
            <li className="list-group-item"><b>First appearance: </b> {first_appearance}</li>
          </ul>

          <h5 className="mt-4">Characters</h5>
          <p>{characters}</p>

          <button className="btn btn-outline-primary mt-3" onClick={handleReturn}>Back</button>
        </div>
      </div>
    </>
  );
};