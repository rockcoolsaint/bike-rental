import React from 'react'
import { Link, useParams } from 'react-router-dom';
import data from '../data';

const SingleBike = () => {
  const { id } = useParams();
  const bike = data.find(item => id === item.id)
  return (
    <>
      <section className='single-bike'>
        <div className='single-bike-images'>
          <img src={bike.fields.imageURL} alt='' />
        </div>
        <div className="single-bike-info">
          <article className='desc'>
            <h3>details</h3>
            <p>{bike.fields.description}</p>
          </article>
          <article className='info'>
            <h3>info</h3>
            <h6>price : ${bike.fields.price}</h6>
            <h6>size : {bike.fields.size} SQFT</h6>
            <h6>
              max capacity : {
                bike.fields.capacity > 1 ? `${bike.fields.capacity} people` : `${bike.fields.capacity} person`
              }
            </h6>
          </article>
        </div>
      </section>
      <div className='btn-primary back-link'>
        <Link to="/">Back</Link>
      </div>
    </>
  );

}

export default SingleBike