"use client"

import React from 'react'
import styles from './links.module.sass';
import NavLink from './navLink/NavLink';
import { useState } from 'react';
import Image from 'next/image';

type Props = {}

export default function Links({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const links = [
    {
      title: 'Главная',
      path: '/',
    }, 
    {
      title: 'Контакты',
      path: '/contact',
    }, 
    {
      title: 'О нас',
      path: '/about',
    },
    {
      title: 'Блог',
      path: '/blog',
    }, ];

    //Временно
    const session = true;
    const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map(link => (
          <NavLink item={link} key={link.title} onClick={handleLinkClick}/>
        ))} 
        {session ? (
          <>  
            {isAdmin && <NavLink item={{title: 'Админ', path: '/admin'}} onClick={handleLinkClick}/>}
            <button className={styles.logout}>Выйти</button>
          </>
        ) : (
          <NavLink item={{title: 'Войти', path: '/login'}} onClick={handleLinkClick}/>
          )
        }
      </div>
      <Image src="/menu.png" alt="menu" width={30} height={30} className={styles.menuButton} onClick={toggleMenu}/>
      <div className={`${styles.mobileLinks} ${isOpen ? styles.open : ''}`}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} onClick={handleLinkClick} />
      ))}
      </div>
    </div>
  )
}