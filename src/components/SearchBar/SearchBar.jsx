import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const notify = (value) => {
  if (value === "") toast("Fill the field");
};

const SearchBar = ({ handleChangeQuery }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim() === "") {
      notify(searchValue);
      return;
    }
    handleChangeQuery(searchValue);
    setSearchValue("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" className={css.btn}>Search</button>
        <Toaster
          toastOptions={{
            className: "toaster-container",
            duration: 2000,
            style: {
              background: "white",
              color: "red",
            },
          }}
        />
      </form>
    </header>
  );
};

export default SearchBar;
