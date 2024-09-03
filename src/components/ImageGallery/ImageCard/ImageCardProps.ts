import { Modal, Photos } from "../../../AppTypes";

export interface ImageCardProps {
  photo: Photos;
  handleOpenModal: (modalData: Modal) => void;
}
