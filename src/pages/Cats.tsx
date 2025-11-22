import { CatCard, CatInfo } from '../components/CatCard.js';
import hans from '../resources/cats/hans-houdini.jpg'
import sieglinde from '../resources/cats/sieglinde.jpg'


export const cats: CatInfo[] = [
   {
      name: "Hans Houdini",
      id: "hans-houdini",
      description: 'Cutie-Patootie',
      imageSrc: hans,
      birthDate: 'August 2025',
      siblings: [{ name: 'Sieglinde', id: 'sieglinde' }],
      tookIn: new Date('2025-11-15'),
   },
   {
      name: "Sieglinde",
      id: "sieglinde",
      description: 'The shy one',
      imageSrc: sieglinde,
      birthDate: 'August 2025',
      siblings: [{ name: 'Hans Houdini', id: 'hans-houdini' }],
      tookIn: new Date('2025-11-15')
   }   
]


export function Cats(): JSX.Element {
   return <div>
      {cats.map(cat => (
         <CatCard key={cat.id} {...cat} />
      ))}
   </div>;
}