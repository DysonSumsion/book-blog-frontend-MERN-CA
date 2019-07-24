import React from "react";

const SearchBar = props => {
  //console.log(props)
 return(
 <>
  <div className="form-group" >
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <input
      className="form-control"
      id="searchBorder"
      style={{ color: 'red' }}
      id={props.name}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      list="books"
      // {...props}
    />
    <datalist id="books">
      {props.books}
    </datalist>
  </div>
 </>
 );
};

export default SearchBar;


// style={{ backgroundColor: '#FFF38A' }}