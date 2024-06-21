import { NavLink } from "react-router-dom";

export default function CustomLink({ children, reference }) {
  return (
    <li className="hover:underline">
      <NavLink
        to={reference}
        style={({ isActive }) => {
          return { color: isActive ? "#5CE171" : "" };
        }}
      >
        {children}
      </NavLink>
    </li>
  );
}
