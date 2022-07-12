import { useSelector } from 'react-redux';
import { getAllFavorites } from '../../redux/store';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
  const favorites = useSelector(getAllFavorites);

  if (!favorites[0]) return <PageTitle text='No cards...'></PageTitle>;

  return (
    <div>
      <PageTitle text='Favorite' />
      <div className={styles.divcards}>
        <ul className={styles.cards}>
            {favorites.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id}/>)}
        </ul>
      </div>
    </div>
  );
};
export default Favorite;