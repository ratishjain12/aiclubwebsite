import { useEffect, useState } from 'react';

const RandomGallery: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<Array<{ url: string; description: string }>>([]);

  useEffect(() => {
    const galleryFolderPath = '/galleryImages'; // Assuming the images are in the public directory
    const numImagesToSelect = 6;

    const getRandomImages = (folderPath: string, count: number) => {
      const imageFiles: Array<{ url: string; description: string }> = [];

      while (imageFiles.length < count) {
        const randomIndex = Math.floor(Math.random() * 14) + 1;
        const imageUrl = `${folderPath}/image${randomIndex}.jpg`;

        // Check if the image URL is already in the selected images
        if (!imageFiles.some((img) => img.url === imageUrl)) {
          imageFiles.push({
            url: imageUrl,
            description: `Description ${randomIndex}`,
          });
        }
      }

      setGalleryImages(imageFiles);
    };

    getRandomImages(galleryFolderPath, numImagesToSelect);
  }, []);

  return (
    <div>
      <div className="image-container">
        {galleryImages.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={image.url}
              alt={image.description}
              className="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomGallery;
