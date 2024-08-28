
"use client"
import React from "react";
import { menuItems } from "./menuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
function Menu() {
  const path = usePathname();
  return (
    <>
      <section className={styles.section}>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={path === item.href ? styles.active : ""}
          >
            {item.label}
          </Link>
        ))}
      </section>
    </>
  );
}

export default Menu;
