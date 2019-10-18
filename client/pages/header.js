import React from 'react';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
      <Link className="mr-auto" href="../components/main/app">
        <img src="../public/styles/img/logo_notext.png"></img>
      </Link>
      <Link className="mr-auto" href="/about">
        <a>about</a>
      </Link>
      <Link className="mr-auto" href="/login">
        <a>login</a>
      </Link>
      <Link className="mr-auto" href="/signup">
        <a>sign up</a>
      </Link>
      </Navbar>
    </>
  );
};

export default Header;
