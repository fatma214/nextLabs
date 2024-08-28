import React from 'react'
import styles from  './postCard.module.css'
import Image from "next/image"
import CardFooter from './../CardFooter/CardFooter';
function PostCard({title,discreption,publishAt,image}) {
 
  return <>
    <div className={styles.card}   >
        <span>{publishAt}</span>
        <Image width={300}  height={250} src={image}/>
        <h2>{title}</h2>
        <p>{discreption}</p>
        <CardFooter/>
    </div>
  </>
}

export default PostCard