import React from "react"
import Navbar from "./components/Navbar"
import Location from "./components/Location"
import data from "./data"

export default function App() {
    const destination = data.map(dest => {
        return (
            <Location 
                key={dest.id}
                dest={dest}
            />
        )
    })
    
    return (
        <div className="container">
            <Navbar />
            <div>
                {destination}
            </div>
        </div>
    )
}