import { Hero as HeroType } from "../../../../types";
import { Link } from "react-router-dom";

interface HeroProps {
  hero: HeroType
}

export const Card = ({ hero }: HeroProps) => (
  <div className='max-w-[240px] w-full'>
    <div><b>Name</b>: {hero.name}</div>
    <div><b>Height</b>: {hero.height}</div>
    <div><b>Gender</b>: {hero.gender}</div>
    <div><b>Hair Color</b>: {hero.hair_color}</div>
    {
      // TODO: Id бы здесь смотрелся лучше, но я не нашел его в ответе
    }
    <Link to={`/hero/${hero.name}`}>Go to detail page</Link>
  </div>
)
