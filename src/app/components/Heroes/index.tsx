import { Hero as HeroType } from "../../../types";
import { Hero } from "../Hero";

interface HeroesProps {
  heroes: HeroType[]
}
export const Heroes = ({ heroes }: HeroesProps) => {
  return <div className='flex flex-wrap gap-3'>
    {
      heroes.map((hero) => <Hero key={hero.name} hero={hero} />)
    }
  </div>
}
