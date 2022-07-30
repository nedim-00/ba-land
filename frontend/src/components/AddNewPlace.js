import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './componentCSS/AddNewPlace.css';
import axios from 'axios';
import balimg from '../images/HomeImages/balimg.png';

function AddNewPlace() {

    const [placeName, setPlaceName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const place = {
            placeName, location, description, tags, image
        };
        

        axios.post('http://localhost:4200/places/', place)
        .then(() => {
            setIsSent(true);
            setTimeout(() => {
              navigate('/');
            }, 1000);
            
        })
        .catch((err) => {
            if(err){
                setError(err.message);
            }
        });
    }

  return (
    <div className='new-place'>

        <form onSubmit={handleSubmit}>
          <label>Place name</label>
          <input type="text" 
                        required
                        value = {placeName}
                        onChange={(e) => setPlaceName(e.target.value)}
          />
          <label>Place location</label>
          <input type="text" 
                        value = {location}
                        onChange={(e) => setLocation(e.target.value)}
          />
          <label>Place description</label>
          <textarea required 
                    value = {description}
                    onChange = {(e) => setDescription(e.target.value)}>
          </textarea>
          <label>Place tags</label>
          <input type="text" 
                        required
                        value = {tags}
                        onChange={(e) => setTags(e.target.value)}
          />
          <label>Place image (URL)</label>
          <input type="text" 
                        required
                        value = {image}
                        onChange={(e) => setImage(e.target.value)}
          />

          {error && <div className='error'> 
          {error==='Request failed with status code 404' ? 'Error: URL broken' : `${error}`}
          </div>}
          
          <div className='mobile-button'>
              <button>{isSent ? 'Sending...' : 'Submit'}</button>
          </div>
        </form>

      <div className="bal-img">
        <img src={balimg} alt="" />
      </div>
    </div>
  )
}

export default AddNewPlace