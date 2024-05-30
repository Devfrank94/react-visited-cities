
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LinkNav() {

  const [selectedPage, setSelectedPage] = useState('');

  useEffect(() => {
    const pathname = window.location.pathname;
    setSelectedPage(pathname);
  }, []);

  return(
      <div className='my-2 gap-3 cursor-pointer sm:flex'>
        <div className={selectedPage === '/' ? 'bg-gray-900 rounded-md py-2' : 'text-gray-300 hover:bg-gray-700 rounded-md py-2'}>
          <Link className='px-10 rounded-md text-sm font-medium text-white' to="/">Home</Link>
        </div>
        <div className={selectedPage === '/blog' ? 'bg-gray-900 rounded-md py-2' : 'text-gray-300 hover:bg-gray-700 rounded-md py-2'}>
          <Link className='px-10 rounded-md text-sm font-medium text-white' to="/blog">Blog</Link>
        </div>
        <div className={selectedPage === '/cta' ? 'bg-gray-900 rounded-md py-2' : 'text-gray-300 hover:bg-gray-700 rounded-md py-2'}>
          <Link className='px-10 rounded-md text-sm font-medium text-white' to="/cta">Cta</Link>
        </div>
        <div className={selectedPage === '/features' ? 'bg-gray-900 rounded-md py-2' : 'text-gray-300 hover:bg-gray-700 rounded-md py-2'}>
          <Link className='px-10 rounded-md text-sm font-medium text-white' to="/features">Features</Link>
        </div>
      </div>
  )
}

export default LinkNav;