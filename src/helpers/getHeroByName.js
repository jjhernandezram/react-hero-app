import { heroes } from '../data/heroes';

export const getHeroByName = (query = '') => {
  if (query.length === 0) return [];
  return heroes.filter(hero => hero.superhero.toLowerCase().includes(query.toLowerCase()));
};