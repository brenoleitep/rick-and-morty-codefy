import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

export type Character = {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  image?: string;
  episode?: Array<string>;
  origin?: { name: string };
  location?: { name: string };
};

type ApiResponse = {
  results: Character[];
};

export const fetchCharacters = async (): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(
    "https://rickandmortyapi.com/api/character",
  );

  return response?.data;
};

export const useFetchCharacters = (): UseQueryResult<ApiResponse, Error> => {
  return useQuery<ApiResponse, Error>({
    queryKey: ["character"],
    queryFn: fetchCharacters,
  });
};
