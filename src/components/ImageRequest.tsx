import { useState, useEffect } from "react";

interface ImageRequestProps {
  imageLink: string;
  imagePlaceholder: string;
  className: string;
  alt?: string | undefined;
}

export function ImageRequest({
  imageLink,
  imagePlaceholder,
  className,
  alt,
}: ImageRequestProps) {
  const [imageSrc, setImageSrc] = useState<string>(imagePlaceholder);

  useEffect(() => {
    async function fetchImage() {
      try {
        const apiURL = `${window.location.origin}/api/ImageRequest?link=${imageLink}`;
        const response: Response = await fetch(apiURL);

        if (response.ok) {
          const base64 = await response.text();
          setImageSrc(`data:image/png;base64,${base64}`);
        } else {
          console.error(
            "Error requesting the image:",
            imageLink,
            response.status
          );
          // Set the image src to the placeholder
          setImageSrc(imagePlaceholder);
        }
      } catch (error) {
        console.error("Error fetching the image:", imageLink, error);
      }
    }
    fetchImage();
  }, [imageLink]);

  return <img src={imageSrc} alt={alt} className={className} />;
}
