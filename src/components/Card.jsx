import React, { useEffect, useState } from 'react';
import Modal from './Modal';

const Card = ({ item, term }) => {
  const [pokemon, setPokemon] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(item.url);
      const data = await response.json();
      setPokemon(data);
    };
    getPokemon();
  }, [item.url]);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && <Modal pokemon={pokemon} setIsOpen={setIsOpen} />}

      <div className='card' onClick={openModal}>
        <img src={pokemon?.sprites?.front_default} alt='' />
        <h2>{item.name}</h2>
      </div>
    </>
  );
};

export default Card;
