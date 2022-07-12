import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';
import styles from './ColumnForm.module.scss';

const ColumnForm = ({ listId }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
      e.preventDefault();
      //dispatch({type: 'ADD_COLUMN', newColumn: {title, icon}});
      dispatch(addColumn({ listId, title, icon }));
      setTitle('');
      setIcon('');
  }

return (
      <form className={styles.heading} onSubmit={handleSubmit}>
          Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} />
          Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
          <Button>
            Add column
          </Button>
      </form>
);
};
export default ColumnForm;