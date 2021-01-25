import styled from "styled-components";

import styledMedia from "src/styles/styledMedia";

export const Wrapper = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  ${styledMedia.greaterThan("tablet")`
    gap: 1.25rem;
    grid-template-columns: repeat(2, 1fr);
  `}

  ${styledMedia.greaterThan("laptopL")`
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
  `}
`;
