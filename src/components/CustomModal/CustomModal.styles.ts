import styled from "styled-components";

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #000;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 20px 0;
  font-size: 1rem;
  line-height: 1.5;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

export const FooterButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #45a049;
  }

  &:first-child {
    background-color: #e0e0e0;
    color: #333;

    &:hover {
      background-color: #ccc;
    }
  }
`;

export const CustomModalButton = styled.div`
  button {
    width: auto;
    max-width: 280px;
    height: 3rem;

    font-size: 0.8rem;

    padding: 0.2rem;

    border-radius: 6px;
  }
`;
