import { StyledHeader } from "../styles/Wrappers";
import NavLink from "./NavLink";

export default function Header() {
  const routes = [
    {
      name: "Pokemon Finder",
      route: "/find"
    },
    {
      name: "Guess the Pokemon",
      route: "/guess"
    },
  ]

  return (
    <StyledHeader>
      <nav>
        <ul>
          {routes.map(({name, route}) => <NavLink route={route}>{name}</NavLink>)}
        </ul>
      </nav>
    </StyledHeader>
  );
}
