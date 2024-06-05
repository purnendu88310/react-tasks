import React, { useState } from 'react';

import useDebounce from '../../useDebounce';
import { searchProducts } from '../../fetcher';
import './search.css'

export default function Search() {
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
    const response = await searchProducts(searchData);
    setFilteredTitle(response)

  }
    

  return (
    <>
      <input
        className='search form-control'
        id="search"
        type="text"
        spellCheck="false"
        placeholder="Search a Title"
        value={search || ''}
        onChange={handleSearch}
      />
      <div>
     {filteredTitle&&( <table  className='fixed table-width'>
     <thead>
  <tr className='header-bg'>
    <th>Title</th>
    <th>Price</th>
    <th>Description</th>
    <th>Category</th>
</tr>
    </thead>
<tbody>
  {filteredTitle&&filteredTitle.map((f) => (
    <tr key={f.id}>
    <td>{f.title}</td>
    <td>{f.price}</td>
    <td>{f.description}</td>
    <td>{f.category.name}</td>

  </tr>
        ))}

        </tbody>
 
</table>)}
      </div>
    </>
  );
}
