import { LoadMoreBtnProps } from "./LoadmoreBtnType";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onChangePage }) => {
  return (
    <button type="submit" onClick={onChangePage}>
      LoadMoreBtn
    </button>
  );
};

export default LoadMoreBtn;
