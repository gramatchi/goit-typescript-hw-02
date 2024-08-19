import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {photos.map((photo) => (
        <ImageCard key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default ImageGallery;
