import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const closeErrorMessage = () => {
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const place = {
      placeName,
      location,
      description,
      tags,
      image,
    };

    axios
      .post('https://easy-ruby-swallow-wrap.cyclic.app/places/', place)
      .then(() => {
        setIsSent(true);
        setTimeout(() => {
          navigate('/allplaces');
        }, 1000);
      })
      .catch((err) => {
        if (err) {
          setError(err);
        }
      });
  };

  return (
    <div className="new-place">
      <form onSubmit={handleSubmit}>
        <label>Place name</label>
        <input
          type="text"
          required
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
        />
        <label>Place location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Place description</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Place tags</label>
        <input
          type="text"
          required
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <label>Place image (URL)</label>
        <input
          type="text"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        {error && (
          <div className="error">
            <div className="error-container">
              <h3 className="error-title">Error</h3>
              <p className="error-message">
                {error.response.status === 404
                  ? 'Server not found'
                  : `${error.message}`}
              </p>
              <button className="close-error" onClick={closeErrorMessage}>
                CLOSE
              </button>
            </div>
          </div>
        )}

        <div className="mobile-button">
          <button className="submit-button">
            {isSent ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>

      <div className="bal-img">
        <img src={balimg} alt="" />
      </div>
    </div>
  );
}

export default AddNewPlace;
