import React from 'react'
import styles from './NotFoundStyles.module.css'
import myimg from "../../../Pictures/error-404-not-found-text-design-vector.webp"

function NotFound() {
  return (
    <img src={myimg} alt="404 not found!" className={styles.notFound} />
  )
}

export default NotFound