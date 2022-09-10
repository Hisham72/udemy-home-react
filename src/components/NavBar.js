import React from 'react'
import styles from './NavBarStyles.module.css'
import menuIcn from '../Pictures/Icons/icons8-menu.svg'
import udemylogo from '../Pictures/Icons/logo-udemy.svg'
import searchIcn from "../Pictures/Icons/search1.svg"
import shopCrt from "../Pictures/Icons/shopping.png"
import globeIcn from "../Pictures/Icons/globe3.png"
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <nav className={styles.myNavBar}>
      <img src={menuIcn} alt="menu icon" id={styles.menuIcn} />
      <Link to='/'>
        <img src={udemylogo} alt="Udemy" width="91" height="34" id={styles.udemylogo} />
      </Link>
      <span>Categories</span>
      <form action="">
          <div className={styles.search}>
              <button className={styles.searchSubmit} type = "button">
                  <img className={styles.searchIcn} src={searchIcn} alt="search icon" />
              </button>
              <input className={styles.searchTxt} type="text" placeholder="Search for anything" />
          </div>
      </form>
      <span>Udemy Business</span>
      <span>Tech on Udemy</span>
      <img id={styles.shopCrt} src={shopCrt} alt="shopping Cart" />
      <button id={styles.lgin}>Log in</button>
      <button id={styles.snup}>Sign up</button>
      <button id={styles.lngbutton}>
          <img src={globeIcn} alt="Select language" className={styles.globeIcn} />
      </button>
    </nav>
  )
}

export default NavBar