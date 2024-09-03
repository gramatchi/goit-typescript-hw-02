import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCardProps";


const ImageCard: React.FC<ImageCardProps> = ({ photo, handleOpenModal }) => {
  return (
    <li className={css.card}>
      <div>
        <img
          src={photo.urls.small}
          alt={photo.alt_description || ""}
          onClick={() =>
            handleOpenModal({
              url: photo.urls.regular,
              alt: photo.alt_description,
            })
          }
        />
      </div>
    </li>
  );
};

export default ImageCard;
