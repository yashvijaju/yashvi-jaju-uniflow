import React from "react";
import styles from "./navbar.module.scss";

// Components
import {Subtitle, P} from './Typography'
// Assets
import logo from '../Assets/uniflow_primary.jpeg'  

function Navbar() {  
  return (
    <div className={styles.container}>
      <a href="https://www.uniflowcampus.com/" target="_blank" rel="noindex nofollow">
        <img className={styles.svg} src={logo}>
        </img>
      </a>
    </div>
  );
}

export default Navbar;
