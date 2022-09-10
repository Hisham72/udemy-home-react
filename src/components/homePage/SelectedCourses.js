import React from 'react'
import styles from './SelectedStyles.module.css'
import Card from './Card'
import data from './CoursesCardData'

function SelectedCourses() {
  const cardList = data.map(piece => <Card key={piece.id} data={piece}/>)
  return (
    <section className={styles.selectedCourses}>
        <h3>Expand your Career opportunities with Python</h3>
        <p>Take one of Udemy`s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.</p>
        <button className={styles.explore}>Explore Python</button>
        <section className={styles.cards}>
            {cardList}
        </section>
    </section>
  )
}

export default SelectedCourses