import React from 'react'
import styles from './links.module.sass';
import NavLink from './navLink/NavLink';

type Props = {}

export default function Links({}: Props) {
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
    <div className={styles.links}>
      {links.map(link => (
        <NavLink item={link} key={link.title}/>
      ))} 
      {session ? (
        <>  
          {isAdmin && <NavLink item={{title: 'Админ', path: '/admin'}} />}
          <button className={styles.logout}>Выйти</button>
        </>
      ) : (
        <NavLink item={{title: 'Войти', path: '/login'}} />
        )
      }
    </div>
  )
}