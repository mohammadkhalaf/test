import React from 'react';

const Pagination = ({ prevUrl, nextUrl, setUrl }) => {
  const paginate = (x) => {
    window.scrollTo(0, 0);
    setUrl(x);
  };

  return (
    <>
      <div className='btn-container'>
        <button disabled={!prevUrl} onClick={() => paginate(prevUrl)}>
          Previous
        </button>
        <button disabled={!nextUrl} onClick={() => paginate(nextUrl)}>
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
