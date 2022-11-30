import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceOut } from 'react-animations';

const BounceOut = styled.div`
  animation: 4s ${keyframes`${bounceOut}`} infinite;
`;

function Home() {
  return (
    <div className="container-fluid">
      <BounceOut>
        <h2 className="pe-3 border-end text-end me-5 mb-5">
          Welcome to my Portfolio
        </h2>
      </BounceOut>
    </div>
  );
}

export default Home;
