import css from "./ImageCard.module.css";

const ImageCard = ({ photo, handleOpenModal }) => {
  return (
    <li className={css.card}>
      <div>
        <img
          src={photo.urls.small}
          alt=""
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
