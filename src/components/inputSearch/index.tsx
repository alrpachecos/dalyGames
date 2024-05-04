'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function InputSearch() {
  const [inputSearch, setInputSearch] = useState('');
  const router = useRouter();

  const handleSubmitSearch = (event: FormEvent) => {
    event.preventDefault();
    if (inputSearch === '') return;

    router.push(`/game/search/${inputSearch}`);
  };

  return (
    <form
      onSubmit={handleSubmitSearch}
      className="w-full bg-slate-200 my-5 flex gap-2 items-center justify-between rounded-lg p-2"
    >
      <input
        className="bg-slate-200 outline-none w-11/12"
        placeholder="Pesquisar"
        type="text"
        value={inputSearch}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setInputSearch(event.target.value)
        }
      />

      <button type="submit">
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
}
