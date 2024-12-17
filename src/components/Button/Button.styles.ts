import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.3rem;

  width: 12rem;
  height: 4rem;

  font-size: 1.2rem;
`;
