import { useEffect, useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhoto } from "./services/api";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try{
        setIsLoading(true)
        setIsError(false)
        const data = await fetchPhoto('office')
        setPhotos(data)
      }
      catch(error){
        console.log(error);
        setIsError(true)
      }
      finally{
        setIsLoading(false)
      }
    }
    fetchData()
  }, []);

  // https://api.unsplash.com/photos/?client_id=oVlIOsaX75GGNo4uFhQZvWzCTPnyPqNUnzW0wEoqoF4&query=${query}

  return (
    <>
      <LoadMoreBtn />
      <SearchBar />
      {isLoading && <Loader />}
      <ImageGallery photos={photos}/>
      {isError && <ErrorMessage />}
      <ImageModal />
    </>
  );
}

export default App;
