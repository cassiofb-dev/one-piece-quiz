// src/components/QuizLogo/index.js

import styled from 'styled-components';

function Logo({ className }) {
  return (
    <img className={className} src="https://upload.wikimedia.org/wikipedia/en/2/2c/One_Piece_Logo.svg" alt="one piece logo"/>
  );
}

const QuizLogo = styled(Logo)`
  max-width: 256px;
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;