import { Link } from "react-router-dom";

type Props = {
  route: string;
  children: React.ReactNode;
};

export default function NavLink({ route, children }: Props) {
  return (
    <li>
      <Link to={route}>{children}</Link>
    </li>
  );
}
