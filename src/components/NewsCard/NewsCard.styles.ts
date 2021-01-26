import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;

  .card-image {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    max-height: 225px;
  }
`;

export const Content = styled.article`
  padding: 1rem 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;

  > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
