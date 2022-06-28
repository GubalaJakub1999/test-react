/* eslint-disable jsx-a11y/anchor-has-content */
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navi}>
      <Link className={styles.icon +' fa fa-tasks'} to='/'></Link>
      <div className={styles.links}>
        <Link className={styles.link} to='/'> Home</Link>
        <Link className={styles.link} to='favorite'> Favorite</Link>
        <Link className={styles.link} to='about'> About</Link>
      </div>
      </nav>
    </div>
  )
}
export default NavBar;