import css from "./ImageCard.module.css";

const ImageCard = ({ photo }) => {
  return (
    <li className={css.card}>
      <div>
        <img src={photo.urls.regular} alt="" />
      </div>
    </li>
  );
};

export default ImageCard;
