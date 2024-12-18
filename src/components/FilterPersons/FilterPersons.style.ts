import styled from "styled-components";

export const AllPersonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 0.9rem;
  }

  input {
    padding: 1rem;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  color: black;

  div {
    padding: 0.1rem;
    max-width: 320px;
    font-size: 12px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SelectTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterDropdownContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  color: black;

  input {
    max-width: 50%;
    font-size: 10px;
  }

  p {
    font-size: 8px;
  }
`;

export const FilterDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  flex-direction: column;
`;

export const FilterIcon = styled.div`
  font-size: 30px;
`;

export const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  background-color: white;
  color: black;

  width: 80%;
  max-width: 480px;
  height: auto;

  padding: 1rem;

  z-index: 10;

  display: flex;
  flex-direction: column;

  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
`;
