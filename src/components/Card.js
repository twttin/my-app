import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            <div>
                <img 
                    src={process.env.PUBLIC_URL + `/images/${props.img}`} 
                    className="card--photo" 
                />
                {/* <img src={katiePhoto} className="card--photo" /> */}
                {badgeText && <div className="card--tag">{badgeText}</div>}
                {/* {props.openSpots === 0 && <div className="card--tag">SOLD OUT</div>} */}
                {/* <div style={{display: props.openSpots ? "none" : "flex"}} className="card--tag">SOLD OUT</div> */}
            </div>
            <div className="row">
                <img 
                    src={process.env.PUBLIC_URL + "/images/star.png"}
                    className="card--star" 
                />
                {/* <img src={star} className="card--star" /> */}
                <p>{props.rating}</p>
                <p className="gray">({props.reviewCount})</p>
                <p className="gray">·</p>
                <p className="gray">{props.location}</p>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <div className="row">
                <p className="bold">From ${props.price}</p>
                <p> / person</p>
            </div>
        </div>
    )
}