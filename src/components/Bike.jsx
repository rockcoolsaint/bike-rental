import React from 'react'
import { Link } from 'react-router-dom';
import check from '../assets/images/check.png'
import cross from '../assets/images/cross.png'

const Bike = ({bike}) => {
  const { id, fields } = bike;

  return (
    <article className='bike'>
      <div className="img-container">
        <img src={fields.imageURL} alt="single bike" />
        <div className="price-top">
          <h6><img src={fields.available ? check : cross} alt="single room" /></h6>
          <p>{fields.available ? 'Available' : 'Unavailable'}</p>
        </div>
        <Link to={`/bikes/${id}`} className="btn-primary bike-link">
          Details
        </Link>
      </div>
      <p className="bike-info">{fields.model}</p>
      <p className="bike-info">Color: {fields.color}</p>
      <p className="bike-info">{fields.location}</p>
    </article>
  )
}

export default Bike