import React from "react";
import CTA from "./CTA";

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Patricia Toko</h1>
        <h5 className="text-light"> Junior frontend integrator</h5>
        <CTA />
      </div>
    </header>
  );
}

export default Header;
