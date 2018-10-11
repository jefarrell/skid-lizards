/**
 * The menu content that is rendered here is queried on
 * the server-side in src/server/index.js.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Link as PrismicLink, RichText } from 'prismic-reactjs';
import PrismicConfig from '../../prismic-configuration';

export const Layout = (props) => {
  const menu = props.menu.map((menuItem, index) => {
    const menuLink = PrismicLink.url(menuItem.link, PrismicConfig.linkResolver)
    const label = menuItem.label[0].text
    return (
      <li key={index} className="top-nav-li">
        <Link to={menuLink} className="top-nav-link"> { label } </Link>
      </li>
    )
 })
  
  return(
    <div className="app-container">
      <header className="top-nav-wrapper">
        <Link to="/" className="top-nav-logo">SKID LIZARDS</Link>
        <nav className="top-nav">
         <ul className="top-nav-ul"> { menu } </ul>
        </nav>
      </header>
      <div>{props.children}</div>
      <footer>
      </footer>
    </div>
  );
};

export default Layout;
