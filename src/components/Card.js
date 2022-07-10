import React from "react"

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