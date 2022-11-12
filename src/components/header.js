import React, { useState } from "react"
import Logo from "../assets/images/logo.svg"
import { Link } from "gatsby"
import { Turn as Hamburger } from "hamburger-react"

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <header className="page-padding header">
      <div className="logo">
        <Link to="/" activeClassName="active">
          <Logo />
        </Link>
      </div>
      <nav className={`${isOpen ? "open" : ""}`}>
        <ul>
          <li onClick={closeMenu}>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/tech" activeClassName="active">
              Tech
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/projects" activeClassName="active">
              Projects
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/blog" activeClassName="active">
              Blog
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </header>
  )
}

export default Header
