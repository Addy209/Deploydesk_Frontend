import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <nav>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/dashboard"}>Dashboard</NavLink>
      <NavLink to={"/test"}>Test Page</NavLink>
    </nav>
  );
}
