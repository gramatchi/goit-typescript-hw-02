import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCardProps";

const ImageCard: React.FC<ImageCardProps> = ({ photo, handleOpenModal }) => {
  return (
    <li className={css.card}>
      <div>
        <img
          src={photo.urls.small}
          alt={photo.alt || ""}
          onClick={() =>
            handleOpenModal({
              url: photo.urls.regular,
              alt: photo.alt,
            })
          }
        />
      </div>
    </li>
  );
};

export default ImageCard;
