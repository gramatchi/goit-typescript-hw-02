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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (query === "") return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchPhoto(query, page);
        setPhotos((prev) => [...prev, ...data]);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const onChangePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      {isLoading && <Loader />}
      <ImageGallery photos={photos} />
      {isError && <ErrorMessage />}
      <LoadMoreBtn onChangePage={onChangePage} />
      <ImageModal />
    </>
  );
}

export default App;
