import React from "react";
import {Link} from "react-router-dom"

export default function Card({name,path,children}) {
  return (
    <Link to={path} className="dashboard-item-card">
      {children}
      <p className="text-slate-200 mt-3 ">{name}</p>
    </Link>
  );
}
