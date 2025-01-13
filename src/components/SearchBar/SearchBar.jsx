import React from "react";
import { useState } from "react";
import toast, {Toaster} from "react-hot-toast";
import s from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import PropTypes from "prop-types";

const SearchBar = ({ handleSearch }) =>{
  const [query, setQuery]= useState("");
  
  const handleChange = (evt) => {
    setQuery(evt.target.value);
  } 

  const handleSubmit = (evt) =>{
    evt.preventDefault();
    if (query.trim() === ""){
      toast.error("Please enter a search!!!");
      return;
    }
    handleSearch(query);
    setQuery("");
  };


  return(
    <header className={s.searchBar}>
      <Toaster position="top-right" reverseOrder="false" />
  <form onSubmit={handleSubmit} className={s.searchForm}>
    <div className={s.wrapper}>
      <button type="submit" className={s.button}>
      <CiSearch />
      </button>
    <input
      type="text"
      className={s.input}
      placeholder="Search images and photos"
      value={query}
      onChange={handleChange}
      />
      </div>  
  </form>
</header>
    )

    SearchBar.propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };

}
export default SearchBar;