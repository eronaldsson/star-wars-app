import { createContext } from "react";

interface ContextProps {
  readonly character: string[];
  readonly setCharacter: (character: string[]) => void;
  readonly planetURL: string;
  readonly setPlanetURL: (planetURL: string) => void;
  readonly starshipURL: string;
  readonly setStarshipURL: (starshipURL: string) => void;
}

export const AppContext = createContext<ContextProps>({
  character: [],
  setCharacter: () => null,
  planetURL: "",
  setPlanetURL: () => null,
  starshipURL: "",
  setStarshipURL: () => null,
});
