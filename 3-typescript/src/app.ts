import { findHeroById } from "./services/hero.service";

const hero = findHeroById(1);

console.log(hero?.name ?? 'Heroe no encontrado');