import React from "react";
import Button from "../Button/Button";
import {
  CardContainer,
  CardImage,
  CardName,
  Tag,
  TagAtributes,
  TagContainer,
} from "./Card.styles";

interface CardProps {
  imageUrl: string;
  name: string;
  status: string;
  totalEpisodes: number;
  origin: string;
  species: string;
  current_location: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  name,
  status,
  totalEpisodes,
  origin,
  species,
  current_location,
}) => {
  return (
    <CardContainer>
      <Tag>
        <span>{status}</span>
      </Tag>
      <CardName>{name}</CardName>
      <CardImage src={imageUrl} alt={name} />

      <TagContainer>
        <TagAtributes>
          {totalEpisodes} {totalEpisodes === 1 ? "Episódio" : "Episódios"}{" "}
        </TagAtributes>
        <TagAtributes>Origem: {origin}</TagAtributes>
        <TagAtributes>Espécie: {species}</TagAtributes>
        <TagAtributes>Loc: {current_location}</TagAtributes>
      </TagContainer>

      <Button text="Ver mais" />
    </CardContainer>
  );
};

export default Card;

// especie, genero, origem, cidade,
