import React from 'react'
import styles from '../css-modules/cardStyles.module.css'

function Card({data}) {
  console.log(data);
  return (
    <div className={styles.card}>
        <img className={styles.cardImg} src={data.image} alt="python" />
        <h4 className={styles.cardHead}>{data.title}</h4>
        <span className={styles.author}>{data.instructor}</span>
        <section className={styles.rating}>
          <span className={styles.ratingNum}>{data.rating}</span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star-half-o"></span>
          <span className={styles.studentsNum}>({data.students})</span>
        </section>
        <section>
            <span className={styles.current}>E£{data.price}</span>
        </section>
        {data.bestSeller && <span className={styles.best}>Bestseller</span>}
    </div>
  )
}

export default Card