import './App.css';

import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  
  const [searchField, setSearchField] = useState('');
  const [films, setFilms] = useState([]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onSearchClick = (event) => {
    fetch(`https://www.omdbapi.com/?s=${searchField}&apikey=5c18216f`)
      .then(response => response.json())
      .then(response => {
        setFilms(response.Response === 'True' ? response.Search : []);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Your Films</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        onClickHandler={onSearchClick}
      />
      <CardList films={films} />
    </div>
  );
};

export default App;
