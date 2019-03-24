import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MessageModal from './MessageModal';

const Home = styled.div`
  position: absolute;
  text-align: center;
  color: #313b72;
`;
const DropDown = styled.div`
  position: relative;
`;
const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0 !important;
  text-indent: 0.01px;
  text-overflow: '';
  background-color: #313b72;
  font-family: 'Amatic SC', cursive;
  letter-spacing: 3px;
  color: #f4ebd9;
  padding: 5px;
  border-radius: 5px;
  background: transparant;
  box-shadow: 2px 2px 5px #888888;
  &:focus {
    outline: 0;
  }
`;

const StyledButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0 !important;
  background-color: #62a87c;
  font-family: 'Amatic SC', cursive;
  font-size: 20px;
  letter-spacing: 3px;
  color: #f4ebd9;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 0px 6px 5px #888888;

  &:hover {
    background-color: #52a87c;
  }
  &:active {
    box-shadow: 0px 2px 5px #666666;
    transform: translateY(4px);
  }
  &:focus {
    outline: 0;
  }
`;
const Main = () => {
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    window.onclick = e => {
      const modalWithHashClassName = document.getElementsByClassName('sc-bxivhb jANVOA')[0];
      if (e.target === modalWithHashClassName) {
        setDisplay('none');
      }
    };
  });

  return (
    <Home>
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
        <DropDown>
          <StyledSelect
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
          </StyledSelect>
        </DropDown>
      )}
      <StyledButton type="button" onClick={() => setDisplay('block')}>
        MESSAGE
      </StyledButton>
      <MessageModal display={display} />
    </Home>
  );
};

export default Main;
