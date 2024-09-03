import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGalleryProps";


const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, handleOpenModal }) => {
  return (
    <ul className={css.gallery}>
      {photos.map((photo) => (
        <ImageCard
          key={photo.id}
          photo={photo}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
