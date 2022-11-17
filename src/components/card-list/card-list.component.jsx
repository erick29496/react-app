import './card-list.styles.css';

import FilmCard from '../card/card.component';

const CardList = ({ films }) => (
  <div className='card-list'>
    {films.map((film) => {
      return <FilmCard key={film.imdbID} film={film} />;
    })}
  </div>
);

export default CardList;
