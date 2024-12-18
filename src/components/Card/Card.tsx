import React, { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";
import { CustomModalButton } from "../CustomModal/CustomModal.styles";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

      <CustomModalButton>
        <button onClick={openModal}>Ver localização</button>
        <CustomModal isOpen={isModalOpen} onClose={closeModal} title={name}>
          <img src={imageUrl} alt={name} />
          <p>Localização: {current_location}</p>
        </CustomModal>
      </CustomModalButton>
    </CardContainer>
  );
};

export default Card;
