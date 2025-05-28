import "./Navigation.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Eventique
      </Link>

      <nav className="navbar">
        <div className="search-box-svg">
          <input type="text" placeholder="Search events, venues..." />
          <svg
            className="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>

        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/">User</Link>
      </nav>
    </header>
  );
}
