import { Hero as HeroType } from "../../../types";

interface HeroProps {
  hero: HeroType
}

export const Hero = ({ hero }: HeroProps) => (
  <div className='max-w-[240px] w-full'>
    <div><b>Name</b>: {hero.name}</div>
    <div><b>Height</b>: {hero.height}</div>
    <div><b>Gender</b>: {hero.gender}</div>
    <div><b>Hair Color</b>: {hero.hair_color}</div>
  </div>
)
