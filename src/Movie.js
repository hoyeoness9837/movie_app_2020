import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className='movie'>
      <img src={poster} alt={title} title={title} />
      <div className='movie__data'>
        <h3 className='movie__title'>{title}</h3>
        <h3 className='movie__year'>{year}</h3>
        <h3 className='movie__summary'>{summary}</h3>
        <ul className='genres'>
          {genres.map((genre, index) => (
            <li key={index} className='movie__genres'>
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default Movie;
