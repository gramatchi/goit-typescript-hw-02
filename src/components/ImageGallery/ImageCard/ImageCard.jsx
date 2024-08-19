const ImageCard = ({photo}) => {
  return (
    <li>
      <img src={photo.urls.regular} alt="" />
    </li>
  )
}

export default ImageCard