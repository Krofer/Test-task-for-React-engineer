import { Hero as HeroType } from "../../../../types";

interface HeroProps {
  hero: HeroType
}
export const Hero = ({ hero }: HeroProps) => {
  return (
    <div>
      <h1 className='text-3xl text-center mb-10'>Detail info about - {hero.name}</h1>
      <div className='flex flex-col items-center'>
        <div><b>Height</b>: {hero.height}</div>
        <div><b>Gender</b>: {hero.gender}</div>
        <div><b>Hair Color</b>: {hero.hair_color}</div>
      </div>
    </div>
  )
}
