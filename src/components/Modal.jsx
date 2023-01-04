import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ pokemon, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className='overlay'>
        <div className='modal'>
          <AiOutlineClose className='close-icon' onClick={closeModal} />
          <div className='logo-container'>
            <img src={pokemon?.sprites?.front_default} alt='' />
          </div>
          <h1 className='pokemon-name'>{pokemon.name}</h1>
          <div className='abilities'>
            <p>Abilities: </p>
            <div>
              {pokemon.abilities.map((i) => {
                return <span key={i.ability.name}>{i.ability.name}</span>;
              })}
            </div>
          </div>
          <div className='movements'>
            <p>Movements: </p>
            {pokemon.moves?.map((m) => {
              return (
                <span className='pokemonMovement' key={m.move.name}>
                  {m.move.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
