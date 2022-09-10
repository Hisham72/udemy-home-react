import React from 'react'
import alarmImg from "../../Pictures/alarm.png"
import styles from "./HeaderStyles.module.css"

function Header() {
  return (
    <header className={styles.myHeader}>
      <div id={styles.new}>
        <h2>New to Udemy? Lucky you.</h2>
        <p>Courses start at E£169.99. Get your new-student offer before it expires.</p>
      </div>
      <aside>
        <img src={alarmImg} alt="a hand pressing an alarm" />
      </aside>
    </header>
  )
}

export default Header