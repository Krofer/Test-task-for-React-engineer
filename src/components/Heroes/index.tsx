import { Hero as HeroType } from "../../types";
import { Card } from "./components/Card";

interface HeroesProps {
  heroes: HeroType[]
}
export const Heroes = ({ heroes }: HeroesProps) => (
  <div className='flex flex-wrap gap-3'>
    {
      heroes.map((hero) => <Card key={hero.name} hero={hero} />)
    }
  </div>
)
