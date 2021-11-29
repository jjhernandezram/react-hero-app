import React, { useMemo } from 'react';
import { getHeroByPublisher } from '../../helpers/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [ publisher ]);

  return (
    <div className="row row-cols-3 row-cols-md-3 g-1">
      {heroes.map((hero) => <HeroCard key={hero.id} hero={hero}/>)}
    </div>
  );
};