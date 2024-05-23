
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
        <div className={selectedPage === '/' ? 'bg-gray-900 text-white rounded-md px-10 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium'}>
          <Link to="/">Home</Link>
        </div>
        <div className={selectedPage === '/blog' ? 'bg-gray-900 text-white rounded-md px-10 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium'}>
          <Link to="/blog">Blog</Link>
        </div>
        <div className={selectedPage === '/cta' ? 'bg-gray-900 text-white rounded-md px-10 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium'}>
          <Link to="/cta">Cta</Link>
        </div>
        <div className={selectedPage === '/features' ? 'bg-gray-900 text-white rounded-md px-10 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium'}>
          <Link to="/features">Features</Link>
        </div>
      </div>
  )
}

export default LinkNav;