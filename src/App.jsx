import { useEffect, useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=oVlIOsaX75GGNo4uFhQZvWzCTPnyPqNUnzW0wEoqoF4&query=office"
      )
      .then((res) => setPhotos(res.data));
  }, []);

  // https://api.unsplash.com/photos/?client_id=oVlIOsaX75GGNo4uFhQZvWzCTPnyPqNUnzW0wEoqoF4&query=${query}

  return (
    <>
      <LoadMoreBtn />
      <SearchBar />
      <ImageGallery photos={photos}/>
      <Loader />
      <ErrorMessage />
      <ImageModal />
    </>
  );
}

export default App;
