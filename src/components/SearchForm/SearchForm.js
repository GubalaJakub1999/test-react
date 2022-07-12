import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
  const stringSearch = useSelector(state => state.searchString)
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState(stringSearch);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchString({searchString}));
}

  return (
      <form onSubmit={handleSubmit} className={styles.searchForm}>
          <TextInput placeholder="Search..." value={searchString} onChange={e => setSearchString(e.target.value)}/>
          <Button>
            <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;