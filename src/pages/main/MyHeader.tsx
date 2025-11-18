import { faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Header } from "../../components/Header.js";
import TitleName from "../../components/TitleName.js";
import { faGithub, faGoogleScholar, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import title from '../../resources/title.jpg';
import './MyHeader.css';

export function MyHeader() {
   return <Header>
   <TitleName
     name="Katzenpflegestelle"
     subtitle="Miau, Miau, Miau!"
     imageSrc={title}
   />
   <div className="header-row"></div>
 </Header>;
}