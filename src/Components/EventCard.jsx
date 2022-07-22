import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = ({event}) => {
    return (
        <div className="eventCard" id={`Event_${event.id}`}>
            <Link to="/event">
                <div className="eventCardInner">
                    <h4>{event.name}</h4>
                </div>
            </Link>
        </div>
    )
}

export default EventCard
