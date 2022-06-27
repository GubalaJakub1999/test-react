import Card from '../Card/Card';
import styles from './Column.module.scss'
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = (props) => {
  const searchString = useSelector(state => state.searchString);
  const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase())));
  return (
            <article className={styles.column}>
                <h2 className={styles.title}>
                  <span class={styles.icon + ' fa fa-' + props.icon  }></span>{props.title}
                  <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} title={card.title} />)}
                  </ul>
                  <CardForm columnId={props.id} action={props.addCard} />
                  </h2>
            </article>
  );
};

export default Column;