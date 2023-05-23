import { useState, useEffect } from "react";
import { GetCorsProtection } from '../models/Sites';

interface ImageRequestProps {
  imageLink: string;
  imagePlaceholder: string;
  className: string;
  alt?: string | undefined;
  site?: string | undefined;
}

export function ImageRequest({
  imageLink,
  imagePlaceholder,
  className,
  alt,
  site,
}: ImageRequestProps) {
  const [imageSrc, setImageSrc] = useState<string>(imagePlaceholder);
  const [imageClass, setImageClass] = useState<string>(className+" animate-pulse");

  useEffect(() => {
    setImageClass(className);

    if (imageLink === undefined || imageLink === "") {
      setImageSrc(imagePlaceholder);
      return;
    }

    // If the site is not protected by CORS, we can request the image directly
    if(site && !GetCorsProtection(site)) {
      setImageSrc(imageLink);
      return;
    }

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
    return () => setImageClass(className);
  }, [imageLink]);
  

  return <img src={imageSrc} alt={alt} className={imageClass} />;
}
