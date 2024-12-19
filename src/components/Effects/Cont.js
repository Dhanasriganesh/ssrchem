import React from 'react';
import styled from 'styled-components';

const Cont = () => {
  return (
    <StyledWrapper>
      <button className="cta">
        <span>Contact Us &nbsp;</span>
       
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cta {
    position: relative;
    margin: auto;
    padding: 11.5px 18px;
    transition: all 0.2s ease;
    border: 3px solid #552da8;
    border-radius: 50px;
    background: #552da8;
    cursor: pointer;
  }

  .cta:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    border-radius: 50px;
    background: white;
    width: 45px;
    height: 45px;
    transition: all 0.8s ease;
  }

  .cta span {
    position: relative;
    font-family: Montserrat;
    font-size: 18px;
    color: white;
    font-weight: 400;
    letter-spacing: 0.05em;
  }

  .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: white;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.5s ease;
  }

  .cta:hover:before {
    width: 100%;
    background: #1c1c1c;
  }

  .cta:hover svg {
    transform: translateX(0);
    transition: all 2s ease;
  }

  .cta:active {
    transform: scale(0.95);
    transition: all 2s ease;
  }`;

export default Cont;