import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
    return (
        <div className="card">
            <div>
                <img src="../public/images/katie-zaferes.png" className="card--photo" />
                <div className="card--tag">SOLD OUT</div>
            </div>
            <div className="row">
                <img src="../public/images/star.png" className="card--star" />
                <p>5.0</p>
                <p className="gray">(6)</p>
                <p className="gray">·</p>
                <p className="gray">USA</p>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <div className="row">
                <p className="bold">From $</p>
                <p className="bold">136</p>
                <p> / person</p>
            </div>
        </div>
    )
}