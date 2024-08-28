"use client"
import React, { useState } from 'react';
import styles from './Card.module.css'
function CardFooter() {
  const [numOfLikes, setNumOfLikes] = useState(0);

  const increaseLikes = (e) => {
   
    e.preventDefault()
    setNumOfLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div  className={styles.footer}>
      <button onClick={increaseLikes}  className={styles.likeButton}>Like</button>
      <div  className={styles.likeCount}>{numOfLikes}</div>
    </div>
  );
}

export default CardFooter;
