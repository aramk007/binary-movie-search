import React from "react";
import Select, { components } from "react-select";
import "./RatingFilter.css";
import ChevronDownIcon from "../assets/icons/chevron-down.svg";

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: "113px",
    minHeight: "48px",
    fontSize: "16px",
    backgroundColor: "white",
    border: "1px solid #979797",
    boxShadow: "none",
    fontFamily: "DM Sans",
    fontWeight: 500,
    letterSpacing: "-0.2px",
    "&:hover": {
      borderColor: "#ccc",
    },
  }),
  menu: (provided) => ({
    ...provided,
    width: "239px",
    maxHeight: "none",
    overflowY: "auto",
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
    display: "none",
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

const SingleValue = ({ data, selectValue }) => {
  if (selectValue.length === 1) {
    return <div>{data.label}</div>;
  } else if (selectValue.length > 1) {
    return <div>{selectValue[0].label}, multi</div>;
  } else {
    return <div>Rating</div>;
  }
};

const RatingFilter = ({ setRatingFilter }) => {
  const options = [
    { value: "any", label: "Any rating" },
    ...Array.from({ length: 10 }, (_, i) => ({
      value: i + 1,
      label: (
        <div className="rating-option">
          {Array.from({ length: i + 1 }, (_, j) => (
            <span key={j} className="star filled">
              ★
            </span>
          ))}
          {Array.from({ length: 10 - (i + 1) }, (_, j) => (
            <span key={j} className="star">
              ★
            </span>
          ))}
        </div>
      ),
    })),
  ];

  const handleChange = (selectedOptions) => {
    const ratings = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    if (ratings.includes("any")) {
      setRatingFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    } else {
      setRatingFilter(ratings);
    }
  };

  return (
    <Select
      name="ratings"
      options={options}
      styles={customStyles}
      classNamePrefix="react-select"
      onChange={handleChange}
      placeholder="Rating"
      components={{ Option, DropdownIndicator, SingleValue }}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
    />
  );
};

export default RatingFilter;
