import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
`;

const Spinner = styled.div`
  color: #333;
  font-size: 18px;
  font-family: sans-serif;
  &::before {
    display: inline-block;
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: solid 2px #ccc;
    border-bottom-color: #66c;
    animation: ${rotate360} 1s linear infinite;
    margin-right: 6px;
    vertical-align: bottom;
  }
`;

const Loading = () => (
  <Spinner>Loading</Spinner>
);

export default Loading;