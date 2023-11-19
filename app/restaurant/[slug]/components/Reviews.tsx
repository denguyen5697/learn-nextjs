import { Review } from '@prisma/client'
import React from 'react'
import ReviewCard from './ReviewCard'

const Reviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div>
      <h1 className='pb-5 mt-10 text-3xl font-bold mb-7 borber-b'>
        What {reviews.length} people are saying
      </h1>
      <div>
        {/* REVIEW CARD */}
        {reviews.map(review => (
          <ReviewCard review={review} key={review.id} />
        ))}
        {/* REVIEW CARD */}
      </div>
    </div>
  )
}

export default Reviews
