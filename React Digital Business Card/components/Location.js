import React from "react"

export default function Location(props) {
    return (
        <div className="location--container">
            <img src={props.dest.imageUrl} className="location--img"/>
            <div>
                <div className="location--details">
                    <img src="../images/location.png" />
                    <p>{props.dest.location}</p>
                    <a href={props.dest.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.dest.title}</h1>
                <p className="date">{props.dest.startDate} - {props.dest.endDate}</p>
                <p className="location-bio">{props.dest.description}</p>
            </div>
        </div>
    )
}