import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "../styles/searchModal.scss";
const SearchBox = ({ value, onChange }) => {
  return (
    <div className="search-box-container" style={{}}>
      <input
        className="form-control"
        name="search"
        type="text"
        placeholder="find your meal"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />

      <FontAwesomeIcon
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{
          marginRight: "1rem",
          fontSize: "1.1rem",
          cursor: "pointer",
          position: "absolute",
          top: "10px",
          right: "4px",
        }}
        icon={faSearch}
      />
    </div>
  );
};

export default SearchBox;
