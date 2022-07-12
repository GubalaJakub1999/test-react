import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = (props) => {
  const dispatch = useDispatch();
  const handleFavToggle = () => {
    dispatch(toggleCardFavorite(props.id));
  };
  return (
    <li className={styles.card}>{props.title}<button type="button" onClick={() => {handleFavToggle( props.id, props.isFavorite)}} className={styles.icon + ` fa ${props.isFavorite ? 'fa-star' : 'fa-star-o'}`}></button></li>
  );
};

export default Card;