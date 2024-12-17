import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.3rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  width: auto;
  max-width: 280px;
  height: 4rem;

  font-size: 0.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    transition:
      background-color 0.2s ease-in-out,
      color 0.2s ease-in-out;
    cursor: pointer;
  }
`;
