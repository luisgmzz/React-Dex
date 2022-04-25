import useImage from "../hooks/useImage";
import { StyledImage } from "../styles/PokemonData";

type Props = {
  images: Images;
};

export default function PokemonImage({ images }: Props) {
  const { image, updateImage } = useImage(images);

  return <StyledImage src={image} alt={image} onClick={updateImage} />;
}
