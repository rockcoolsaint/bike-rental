import React from 'react';
import Bike from './Bike';
import data from '../data';

const BikeList = () => {
  const bikes = data;
  
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