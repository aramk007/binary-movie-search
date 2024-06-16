import React from "react";
import Select, { components } from "react-select";
import ChevronDownIcon from "../assets/icons/chevron-down.svg";
import "./GenreFilter.css";

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: "113px",
    minHeight: "48px",
    fontSize: "14px",
    backgroundColor: "white",
    border: "1px solid #979797",
    boxShadow: "none",

    fontFamily: "DM Sans",
    fontWeight: 500,
    letterSpacing: "-0.2px",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      borderColor: "#ccc",
    },
  }),
  menu: (provided) => ({
    ...provided,
    width: "126px",
    height: "151px",
    overflowY: "hidden",
    margin: 0,
    padding: 0,
    zIndex: 9999,
  }),
  option: (provided, state) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    backgroundColor: state.isSelected ? "#e0e0e0" : "white",
    padding: "4px 8px",
    margin: 0,
    fontSize: "14px",
  }),
  multiValue: (provided) => ({
    ...provided,
    display: "none", // Hide selected values in the input box
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "0 8px",
  }),
  indicatorSeparator: () => null,
  clearIndicator: () => null,
  placeholder: (provided) => ({
    ...provided,
    fontFamily: "DM Sans",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "-0.2px",
  }),
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img
        src={ChevronDownIcon}
        alt="Dropdown indicator"
        className="dropdown-chevron"
      />
    </components.DropdownIndicator>
  );
};

const Option = (props) => {
  return (
    <components.Option {...props}>
      <div className="option-container">
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />
        <label>{props.data.label}</label>
      </div>
    </components.Option>
  );
};

const SingleValue = ({ data }) => {
  return (
    <div>{data.length === 1 ? data[0].label : `${data[0].label}, multi`}</div>
  );
};

const genreOptions = [
  { value: "any", label: "Any genre" },
  { value: "Action", label: "Action" },
  { value: "Comedy", label: "Comedy" },
  { value: "Drama", label: "Drama" },
  { value: "Thriller", label: "Thriller" },
].sort((a, b) => (a.value === "any" ? -1 : a.label.localeCompare(b.label)));

const GenreFilter = ({ setGenreFilter }) => {
  const handleChange = (selectedOptions) => {
    const genres = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    if (genres.includes("any")) {
      setGenreFilter(["Action", "Comedy", "Drama", "Thriller"]);
    } else {
      setGenreFilter(genres);
    }
  };

  const formatGroupLabel = (data) => {
    if (data.length === 1) {
      return data[0].label;
    } else if (data.length > 1) {
      return `${data[0].label}, multi`;
    }
    return "Genre";
  };

  return (
    <Select
      name="genres"
      options={genreOptions}
      styles={customStyles}
      classNamePrefix="react-select"
      onChange={handleChange}
      placeholder="Genre"
      components={{ Option, DropdownIndicator, SingleValue }}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
    />
  );
};

export default GenreFilter;
