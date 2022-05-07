import { MouseEvent, useEffect, useState } from "react";

export default function useImage(images: Images) {
  const [image, setImage] = useState(images.front);

  const updateImage = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setImage(prevImage =>
      prevImage == images.front ? images.back : images.front
    );
  };

  useEffect(() => setImage(images.front), [images]);

  return { image, updateImage };
}
