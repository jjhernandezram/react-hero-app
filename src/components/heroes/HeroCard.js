import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({ hero }) => {
  const { id, superhero, alter_ego, first_appearance, characters } = hero;

  const heroImages = require.context('../../assets', true);

  return (
    <div className="col">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={heroImages(`./${id}.jpg`).default} className="img-fluid rounded-start" alt={superhero}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-subtitle mb-2 text-muted">{alter_ego}</p>
              {(alter_ego !== characters) && <p className="text-muted lh-sm">{characters}</p>}
              <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
              <Link className="btn btn-primary btn-sm" to={`/hero/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};