import React from 'react'

const navBar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#333",
  color: "#fff",
  padding:"0 20px",
  height: "60px"

}

const navBarItem = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "15px",
  transition: "all 0.4s"
}


const NavBar = () => {
  return (
    <div >
       <nav style={navBar}>
        <a href="#home" style={navBarItem} >
          Home
        </a>

      <a href='#About' style={navBarItem} >About</a>

        <a href='#services' style={navBarItem}>Services</a>

        <a href='#contact' style={navBarItem}>Contact</a>
        </nav> 

    </div>
  )
}

export default NavBar