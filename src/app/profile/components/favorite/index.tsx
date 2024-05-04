'use client';
import { useState } from 'react';
import { FiEdit, FiX } from 'react-icons/fi';

export function FavoriteCard() {
  const [inputFavorite, setInputFavorite] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [gameFavorite, setGameFavorite] = useState('');

  const handleEditButton = () => {
    setShowInput(!showInput);

    if (inputFavorite !== '') {
      setGameFavorite(inputFavorite);
    }

    setInputFavorite('');
  };

  return (
    <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            className="w-full rounded-md h-8 text-black px-2 outline-none"
            type="text"
            value={inputFavorite}
            onChange={(event) => setInputFavorite(event.target.value)}
          />

          <button onClick={handleEditButton}>
            <FiX size={24} color="#FFFFFF" />
          </button>
        </div>
      ) : (
        <button
          className="self-start hover:scale-110 duration-200 transition-all"
          onClick={handleEditButton}
        >
          <FiEdit size={24} color="#FFFFFF" />
        </button>
      )}

      {gameFavorite && (
        <div>
          <span className="text-white">Jogo favorito:</span>
          <p className="font-bold text-white">{gameFavorite}</p>
        </div>
      )}

      {!gameFavorite && (
        <p className="font-bold text-white">Adicionar jogo</p>
      )}
    </div>
  );
}
