/* eslint-disable jsx-a11y/anchor-has-content */
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navi}>
      <a className={styles.icon +' fa fa-tasks'} href='/'></a>
      <div className={styles.links}>
        <a className={styles.link} href='/'> Home</a>
        <a className={styles.link} href='favorite'> Favorite</a>
        <a className={styles.link} href='about'> About</a>
      </div>
      </nav>
    </div>
  )
}
export default NavBar;