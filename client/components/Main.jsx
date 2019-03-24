import React, { useState, useEffect } from 'react';
import MessageModal from './MessageModal';

const Main = () => {
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    console.log('hello');
    window.onclick = e => {
      console.log(e.target);
      if (e.target == <MessageModal display={display} />) {
        console.log('inside the if statement');
        setDisplay('none');
      }
    };
  });

  return (
    <div>
      <div>picture of pigeon</div>
      {location === 'location' ? (
        <>
          <button type="button" onClick={() => setLocation('')}>
            Select Contact
          </button>
          <input
            type="text"
            placeholder="enter location"
            value={address}
            onChange={e => {
              console.log(address);
              setAddress(e.target.value);
            }}
          />
        </>
      ) : (
        <select
          value={location}
          onChange={e => {
            setLocation(e.target.value);
          }}
        >
          <option>select</option>
          <option value="location">add location</option>
          <option value={1}>fake tristan</option>
          <option value={2}>fake chang</option>
          <option value={3}>fake melody</option>
        </select>
      )}
      <button type="button" onClick={() => setDisplay('block')}>
        MESSAGE
      </button>
      <MessageModal display={display} />
    </div>
  );
};

export default Main;
