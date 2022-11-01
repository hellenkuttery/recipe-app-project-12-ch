
import { GiHamburgerMenu } from 'react-icons/gi';
import Nav, { Brand ,Menu,MenuLink,Hamburger} from "./Navbar.style";
import {useState} from "react"

/* <nav>
<a href="">
  <i>{"<Clarusway/>"}</i>
  <span>Recipe</span>
</a>

<a href="">
  <Link to="/">Home</Link> 
  <Link to="about">About</Link> 
  <Link to="register">Register</Link> 
  <Link to="login">Logout</Link> 
</a>
</nav> */

// Böyle başla sonra Linkleri stillendirmeyle devam et





const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        {/* italik ve kod olark görünmesin diye  i  */}
      <i>{"<Clarusway/>"}</i>
        <span>Recipe</span>
      </Brand>   

{/* Hamburger kısmıi öçin hamburger ikonu */}

<Hamburger onClick={()=>setIsOpen(!isOpen)}>
<GiHamburgerMenu />
</Hamburger>

      <Menu isOpen={isOpen} onClick={()=>setIsOpen(false)}>
        <MenuLink to="/">HOME</MenuLink>
        <MenuLink to="about">ABOUT</MenuLink>
        <MenuLink to="register">REGISTER</MenuLink>
        <MenuLink to="login" onClick={()=>sessionStorage.clear()}>LOGOUT</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
