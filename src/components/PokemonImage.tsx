import { MouseEvent, useEffect, useState } from "react";
import { StyledImage } from "../styles/PokemonData";

type Props = {
  images: {
    front: string;
    back: string;
  };
};

export default function PokemonImage({ images }: Props) {
  const [image, setImage] = useState(images.front);
  const updateImage = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setImage(prevImage =>
      prevImage == images.front ? images.back : images.front
    );
  };

  useEffect(() => setImage(images.front), [images]);

  return <StyledImage src={image} alt={image} onClick={updateImage} />;
}
