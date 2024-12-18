import styled from "styled-components";

export const AllPersonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 80vw;

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
  color: black;

  p {
    font-size: 8px;
  }
`;

export const FilterInputContainer = styled.div`
  input {
    max-width: 363px;
    width: 80%;
    height: 38px;
    font-size: 10px;
  }

  @media (min-width: 768px) {
    width: 363px;

    input {
      width: 100%;
    }
  }
`;

export const FilterDropdown = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
`;

export const FilterIcon = styled.div`
  color: white;
  font-size: 30px;

  transition:
    transform 0.3s ease-in-out,
    color 0.3s ease-in-out;
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
    opacity 2s ease-in-out;
`;

export const FilterCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }

  img {
    width: 330px;
    height: 330px;
    object-fit: cover;
    margin: 0 auto;
  }
`;
