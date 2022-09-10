import React from 'react'
import SelectedCourses from './SelectedCourses'
import styles from './CoursesStyles.module.css'

function Courses() {
  return (
    <section id={styles.courses}>
      <h2>A broad selection of courses</h2>
      <p>Choose from 185,000 online video courses with new additions published every month</p>
      <ul id={styles.tabs}>
        <li id = {styles.Python}>Python</li>
        <li id = {styles.Excel}>Excel</li>
        <li id = {styles.WebDevelopment}>Web Development</li>
        <li id = {styles.JavaScript}>JavaScript</li>
        <li id = {styles.DataScience}>Data Science</li>
        <li id = {styles.Aws}>AWS Certification</li>
        <li id = {styles.Drawing}>Drawing</li>
      </ul>
      <SelectedCourses />
    </section>
  )
}

export default Courses