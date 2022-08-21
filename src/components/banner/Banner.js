import React from "react"
import "./banner.css"

function banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner-btns">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <h1 className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
          amet?
        </h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default banner
