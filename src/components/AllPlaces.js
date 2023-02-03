import React, { useEffect, useState } from 'react';
import './componentCSS/AllPlaces.css';
import axios from 'axios';
import Place from './Place';
import dropdown from '../images/NavbarImages/dropdown.png';

function AllPlaces() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState({});

  useEffect(() => {
    axios
      .get('https://easy-ruby-swallow-wrap.cyclic.app/places')
      .then((res) => {
        if (res.status !== 200) {
          throw Error('Unable to get data.');
        }
        return res.data;
      })
      .then((data) => {
        setData(data);
        setFilteredData(data);
        setError(null);
      })
      .catch((err) => {
        if (err) {
          setError(err.message);
        }
      });
  }, []);

  const handleClick = () => {
    setFilter((prevValue) => !prevValue);
  };

  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter((dat) => dat.tags.includes(search.trim().toLowerCase()))
      );
    }
  }, [search, data]);

  return (
    <div className="all-places">
      {filteredData.length ? (
        <Place data={filteredData} />
      ) : (
        <div className="places not-found">
          Place not found! {error && <div>{error}</div>}
        </div>
      )}

      <div className="filter">
        <div className="filter-container">
          <h3 onClick={handleClick}>
            Looking for a specific place?
            <img
              className={filter ? 'rotate-icon' : 'rotate-back'}
              src={dropdown}
              alt=""
            />
          </h3>

          <div className={`filter-place ${filter ? 'show' : ''}`}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPlaces;
