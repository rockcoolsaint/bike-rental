import React from 'react'
import Bike from './Bike';

const BikeList = ({bikes}) => {
  // console.log(bikes)
  return (
    <section className='bikelist'>
      <div className='bikeslist-center'>
        {
          bikes.map(item => {
            return <Bike key={item.id} bike={item} />;
          })
        }
      </div>
    </section>
  )
}

export default BikeList