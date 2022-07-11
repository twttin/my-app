import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

const cardData = data.map(data => <Card img={data.coverImg} rating={data.stats.rating} reviewCount={data.stats.reviewCount} location={data.location} title={data.title} price={data.price} openSpots = {data.openSpots}></Card>)
console.log(cardData)

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards-list">
                {cardData}
            </div>
        </div>
    )
}