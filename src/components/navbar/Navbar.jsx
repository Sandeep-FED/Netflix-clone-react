import React from "react"
import "./navbar.css"

function navbar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014.svg"
        alt="Netflix Logo"
      />
      <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar"
      />
    </div>
  )
}

export default navbar
