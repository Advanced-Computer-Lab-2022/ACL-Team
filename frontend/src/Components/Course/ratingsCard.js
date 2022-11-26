import React from 'react'
import Rating from '../Cards/rating'
import "../css/ratingsCard.css"


export default function RatingsCard() {
  return (
    <div>
        <div className="ratings_cards">
            <div className="rating1">
                <Rating/>
            </div>
            <div className="rating2">
                <Rating/>
            </div>
            <div className="rating3">
                <Rating/>
            </div>
            <div className="rating4">
                <Rating/>
            </div>

        </div>
    </div>
  )
}
