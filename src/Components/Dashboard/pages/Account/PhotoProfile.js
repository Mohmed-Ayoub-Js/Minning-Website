import React from 'react'
import './a.css';
const PhotoProfile = () => {
    const imagesrc = 'https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg';
  return (
    <div className='photo-profile-container'>
        <div className='photoprofile'>
                <img src={imagesrc} alt=''/>
        </div>
    </div>
  )
}

export default PhotoProfile