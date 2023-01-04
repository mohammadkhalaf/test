import React, { useState, useEffect } from 'react';
import Card from './Card';
import { AiOutlineSearch } from 'react-icons/ai';

const List = ({ items }) => {
  const [term, setTerm] = useState('');

  const changeHandler = (e) => {
    setTerm(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    return item.name.startsWith(term);
  });

  return (
    <>
      <div>
        <div className='search-container'>
          <input
            type='text'
            value={term}
            onChange={changeHandler}
            className='search'
            placeholder='Search for your favorite pokemon'
          />
          <AiOutlineSearch className='icon' />
        </div>
        <div className='container'>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              return <Card item={item} key={item.name} />;
            })
          ) : (
            <h2 className='not-found'>No pokemons could be found :(</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default List;
