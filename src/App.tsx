import { useEffect, useState } from "react";
import "./App.css";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhoto } from "./services/api";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Modal, Photos } from "./AppTypes";

function App() {
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalPhoto, setModalPhoto] = useState<Modal>({
    url: "",
    alt: "",
  });

  const handleChangeQuery = (newQuery: string): void => {
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

  const handleOpenModal = (img: Modal) => {
    setOpenModal(true);
    setModalPhoto(img);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalPhoto({ url: "", alt: "" });
  };

  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      {isLoading && <Loader />}
      <ImageGallery photos={photos} handleOpenModal={handleOpenModal} />
      {isError && <ErrorMessage />}
      <LoadMoreBtn onChangePage={onChangePage} />
      <ImageModal
        modalIsOpen={openModal}
        closeModal={handleCloseModal}
        url={modalPhoto.url}
        alt={modalPhoto.alt}
      />
    </>
  );
}

export default App;
