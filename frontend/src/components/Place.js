import React from 'react';
import './componentCSS/AllPlaces.css';

function Place({data}) {
  return (
    <div className="places">
        {data.map(dat => (
            <div className="place" key={dat._id}>
                <img className="place-img" src={dat.image} alt="" />

                <div className="place-info">
                    <div className="place-text">
                        <h2>{dat.placeName}</h2>
                        <h3 className='place-location'>{dat.location ? `Location: ${dat.location}` : 'City'}</h3>
                        <p>{dat.description}</p>
                    </div>
                    <div className='place-tag'>
                        <h4>
                            {dat.tags.split(" ").map(element => (
                                <span key={element}>{`#${element}`}</span>))}
                        </h4>
                    </div>   
                </div> 
            </div>
        ))}
    </div>
  )
}

export default Place