import { Link } from "react-router-dom";
import { StyledHeader } from "../styles/Wrappers";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <NavLink route="/find">Pokemon Finder</NavLink>
          <NavLink route="/guess">Guess The Pokemon</NavLink>
          <NavLink route="/pokerdle">Pokerdle</NavLink>
        </ul>
      </nav>
    </StyledHeader>
  );
}
