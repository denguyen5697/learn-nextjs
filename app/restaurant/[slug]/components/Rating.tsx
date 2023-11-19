import React from 'react'
import { Review } from '@prisma/client'

import { calcucaleReviewRatingAverage } from '../../../../utils'
import Stars from '../../../components/Stars'

const Rating = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className='flex items-end'>
      <div className='flex items-center mt-2 ratings'>
        <Stars reviews={reviews} />
        <p className='ml-3 text-reg'>
          {calcucaleReviewRatingAverage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className='ml-4 text-reg'>{reviews.length} Reviews</p>
      </div>
    </div>
  )
}

export default Rating
