import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonBoundingBox } from 'react-icons/bs';

export default function Menu() {

  return (
   <nav className={styles.menu}>
      <img src="https://res.cloudinary.com/ralpwd/image/upload/v1650671015/LOGO_NEGATIVE_bd1vfn.png" alt="" />
      <ul>
        <li>
          <Link to="/">
            <AiFillHome /> 
            <span className={styles.menu__text}>Home</span> 
          </Link>
        </li>
        <li>
          <Link to="/about">
            <BsPersonBoundingBox /> 
            <span className={styles.menu__text}>About</span> 
          </Link>
        </li>
      </ul>
   </nav>
  );
}
