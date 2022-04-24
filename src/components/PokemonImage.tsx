import { StyledImage } from "../styles/PokemonData";

type Props = {
  images: {
    front: string;
    back: string;
  };
};

/* 
sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string;
        front_female: string | null;
      };
      home: {
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
      "official-artwork": {
        front_default: string;
      };
    };
    versions: string[];
  };
*/

export default function PokemonImage({ images }: Props) {
  return (
    <div>
      <StyledImage src={images.front} alt={images.front} />
      <StyledImage src={images.back} alt={images.back} />
      <button>Alternar imagen</button>
    </div>
  );
}
