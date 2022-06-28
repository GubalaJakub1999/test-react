/* eslint-disable jsx-a11y/anchor-has-content */
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navi}>
      <Link className={styles.icon +' fa fa-tasks'} to='/'></Link>
      <div className={styles.links}>
        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="favorite">Favorite</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="about">About</NavLink>
      </div>
      </nav>
    </div>
  )
}
export default NavBar;