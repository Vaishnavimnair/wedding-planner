import "./Navigation.css";
import React, { useState } from "react";

export default function Navigation() {
  return (
    <header className="header">
      <a href="/" className="logo">
        Eventique
      </a>

      <nav className="navbar">
        <div className='search-box' >
          <input type="text" placeholder="search"/>
        </div>
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">User</a>
      </nav>
    </header>
  );
}
