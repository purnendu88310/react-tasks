import React, { useState } from 'react';

import useDebounce from './useDebounce';
import { fetchProducts } from './fetcher';

export default function App() {
  const [search, setSearch] = useState('');
  const [filteredTitle, setFilteredTitle] = useState([]);

  useDebounce(
    () => {
      console.log(search);
      fetchData(search);
    },
    [search],800 );

  const handleSearch = (e) => setSearch(e.target.value);

  async function fetchData(searchData) {
    const response = await fetchProducts(searchData);
    setFilteredTitle(response)

  }
    

  return (
    <>
      <input
        id="search"
        type="text"
        spellCheck="false"
        placeholder="Search a Title"
        value={search || ''}
        onChange={handleSearch}
      />
      <div>
        {filteredTitle&&filteredTitle.map((f) => (
          <p key={f.id}>{f.title}</p>
        ))}
      </div>
    </>
  );
}
