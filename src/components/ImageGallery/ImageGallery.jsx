import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  return (
    <ul className={css.gallery}>
      {photos.map((photo) => (
        <ImageCard key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default ImageGallery;
