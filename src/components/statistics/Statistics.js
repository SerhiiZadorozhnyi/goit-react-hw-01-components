import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


const Statistics = ({title, stats}) => (
<section className={styles.statistics}>
  {title && <h2 className={styles.title}>{title}</h2>}

  <ul className={styles.statList}>
      {stats.map((stat) => (
          <li className={styles.item} key={stat.id} style={{ backgroundColor: `rgba( ${random()} , ${random()} , ${random()}` }}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>       
          </li>)
        )}
  </ul>
</section>
);

function random() {
  return Math.floor(Math.random() * 256)
}

Statistics.defaultProps = {
    title: ""
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
};


export default Statistics;