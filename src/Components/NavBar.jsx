import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-300 bg-opacity-90 z-10">
      <div className="container mx-auto flex items-center justify-between h-16">
        <a href="#" className="text-black text-[28px] font-bold">GoodFood</a>
        <div className="lg:flex items-stretch lg:flex-no-shrink lg:flex-grow">
          <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <a href="#" className="py-2 px-4 text-black no-underline hover:bg-gray-400">Item 1</a>
            <a href="#" className="py-2 px-4 text-black no-underline hover:bg-gray-400">Item 2</a>
            <a href="#" className="py-2 px-4 text-black no-underline hover:bg-gray-400">Item 3</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
