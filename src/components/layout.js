import { Link } from 'gatsby';
import React from 'react';
import './layout.css';

export default function Layout({ children }) {
  return (
    <div>
      <header class="header">
        <div class="inner">
          <h1> <Link to="/">Clean Code Shop</Link></h1>
        </div>
      </header>
      <main class="main">
        {children}
      </main>
    </div>
  );
}