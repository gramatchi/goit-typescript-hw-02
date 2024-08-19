const ImageCard = ({ photo }) => {
  return (
    <li>
      <div>
        <img src={photo.urls.regular} alt="" />
      </div>
    </li>
  );
};

export default ImageCard;
