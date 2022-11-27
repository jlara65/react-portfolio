// HEADER INDEX.JS
import React from 'react';
import Nav from '../Navigation/index';

function Header(props) {
  const { currentPage, handlePageChange } = props;
  return (
    <div>
      <section>
        <header>
          <div>
            <h1>Joseph Lara's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            ></Nav>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header;
