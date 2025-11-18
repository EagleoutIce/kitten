import { pageName } from "../util/m.js";
import "./CatCard.css";

export interface CatInfo {
   readonly name: string;
   readonly id: string;
   readonly description: string;
   readonly siblings?: { id: string, name: string; }[];
   readonly imageSrc: string;
   readonly birthDate: string;
   readonly tookIn?: Date;
   readonly adoptionDate?: Date;
   readonly specialNeeds?: string;
}

function formatDate(date: Date): string {
   return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
   });
}
export function CatCard({ name, description, id, imageSrc: image, siblings, birthDate, tookIn, adoptionDate, specialNeeds }: CatInfo) {
   return <a className={`cat-card`} href={
      `#/${pageName}#${id}`
   } id={id} rel="noreferrer" target="_blank">
         <div>{ typeof image === 'string' ? <img src={image} alt={description} className="cat-img" /> : image }</div>
         <div className="cat-card-details">
         <div className="cat-card-title">
            {name}
         </div>
         <div className="cat-card-description">
            {description}
         </div>
         <div className="cat-card-breadcrumbs">
            <span>Born: {birthDate}</span><br/>
            {tookIn && <><span>Took in: {formatDate(tookIn)}</span><br/></>}
            {adoptionDate && <><span>Adopted: {formatDate(adoptionDate)}</span><br/></>}
            {specialNeeds && <><span>Special Needs: {specialNeeds}</span><br/></>}
            {siblings && <><span>Siblings: {siblings?.map(s => 
               <span key={`crumb-${s.id}`}>{s.name}</span>
            )}</span> </>}
         </div>
         </div>
   </a>;
}