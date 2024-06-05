import React, { useEffect, useState } from 'react';

import { fetchProducts } from '../../fetcher';
import './product-list.css' 
import ReactPaginate from 'react-paginate';

export default function ProductList() {
  const [filteredTitle, setFilteredTitle] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);



  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData(searchData) {
    const response = await fetchProducts(searchData,currentPage);
    setFilteredTitle(response)

  }
  const handlePageClick = (event) => {
    setCurrentPage(event.selected+1)
    fetchData()
   console.log(event.selected);
  };

  return (
    <>
   {filteredTitle&&( <div >
     <table  className='fixed table-width'>
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
 
</table>
 <ReactPaginate className='pagination'
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={20}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
</div>)}
{!filteredTitle&&(<div>Loading product list please wait... </div>)} 
   
    </>
  );
}
