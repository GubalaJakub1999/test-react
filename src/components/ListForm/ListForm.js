import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import styles from './ListForm.module.scss';

const ListForm = ({ listId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
      e.preventDefault();
      //dispatch({type: 'ADD_COLUMN', newColumn: {title, icon}});
      dispatch(addList({ listId, title, description }));
      setTitle('');
      setDescription('');
  }

return (
      <form className={styles.heading} onSubmit={handleSubmit}>
          Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} />
          Description: <TextInput value={description} onChange={e => setDescription(e.target.value)} />
          <Button>
            Add list
          </Button>
      </form>
);
};
export default ListForm;