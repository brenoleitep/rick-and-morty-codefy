import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: 360;
  background: linear-gradient(135deg, #0e2d50, #49774b, #0e2d50);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  gap: 1rem;

  border: 1px solid #d1d8e0;
`;

export const Tag = styled.div`
  position: absolute;
  left: 0;
  top: 5px;

  background-color: #e5ff00;
  color: black;

  padding: 0.2rem;
  width: 50px;

  text-transform: uppercase;
  font-size: 0.9rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 1px;
  font-weight: lighter;

  display: flex;
  justify-content: center;

  border-radius: 0.1rem;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.2rem;
  flex-wrap: wrap;

  width: 100%;
`;

export const TagAtributes = styled.div`
  background-color: #e5ff00;
  color: black;

  padding: 0.2rem;
  width: auto;

  text-transform: uppercase;
  font-size: 0.7rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 1px;
  font-weight: lighter;

  display: flex;
  justify-content: center;

  border-radius: 0.1rem;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;

  object-fit: cover;

  border: 2px solid #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const CardName = styled.h2`
  font-size: 1.2rem;
  font-weight: 900;
  color: #fff;
  margin: 1rem 0;
  text-transform: uppercase;
  text-align: center;
`;
