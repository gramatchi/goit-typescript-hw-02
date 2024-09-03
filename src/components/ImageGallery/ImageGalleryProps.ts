import { Modal, Photos } from "../../AppTypes";

export interface ImageGalleryProps {
  photos: Photos[];
  handleOpenModal: ({}: Modal) => void;
}
