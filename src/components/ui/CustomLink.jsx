import React from "react";
import { useMatch, Link } from "react-router-dom";

export default function CustomLink({ to, children, ...props }) {
  const match = useMatch(to);
  return (
    <Link {...props} to={to} className={`${match ? "text-lg" : "text-gray-400"}`}>
      {children}
    </Link>
  );
}
