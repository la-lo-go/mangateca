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
        const requestOptions : RequestInit = {
            method: 'GET',
            headers: new Headers({
                'Accept': 'image/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Access-Control-Allow-Origin': 'manganyaa.com',
            }),
          };

        const response: Response = await fetch(imageLink, requestOptions);
        if (response.ok) {
          setImageSrc(imageLink);
        } else {
          console.error(
            "Error requesting the image:",
            imageLink,
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching the image:", imageLink, error);
      }
    }
    fetchImage();
  }, [imageLink]);

  return <img src={imageSrc} alt={alt} className={className} />;
}
