import { Content } from "../components/Content.js";
import NotFoundCat from "../resources/404.png";
import "./NotFound.css"

export function NotFound() {
   return <Content>
      <img src={NotFoundCat} alt="404 cat" className="cat-404" />
      <h1>
         Oh no! This page is not to be found!
      </h1>
      <div className="main">
      </div>
   </Content>;
}  