
import React from 'react'
import styles from "./Header.module.css"
import Menu from './Menu'
function Header() {
  
  // const menuItems = [
  //    {
  //     href:"/",
  //     label:"Home"
  //    },
  //    {
  //     href:"/blog",
  //     label:"Blog"
  //    },
  //    {
  //     href:"/about",
  //     label:"About"
  //    },
  //    {
  //     href:"/contact",
  //     label:"Contact"
  //    },
  //    {
  //     href:"/dashboard",
  //     label:"Dashboard"
  //    },
  //    {
  //     href:"/login",
  //     label:"Login"
  //    },
     

  // ]


  return <>
<header className={`${styles.bgDark} ${styles.navBar}  `}>

  <h1 class={styles.headerTitle}>header</h1>

  <Menu/>

{/* 
  <section>
  <Link href="/" className={path=="/"?styles.active:""}>Home</Link>
  <Link href="/blog" className={path=="/blog"?styles.active:""}>Blog</Link>
  <Link href="/contact" className={path=="/contact"?styles.active:""}>Contact</Link>
  <Link href="/about" className={path=="/about"?styles.active:""}>About</Link>
  <Link href="/dashboard" className={path=="/dashboard"?styles.active:""}> Dashboard</Link>
  <Link href="/login"className={path=="/login"?styles.active:""}> Login</Link>

  </section> */}

  </header>
  </>
}

export default Header