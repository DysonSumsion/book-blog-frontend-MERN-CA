import React from "react";
import axios from "axios";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import FormCheckbox from "../components/FormCheckbox";
import Button from "../components/Button";
import "../container/FormAdd.css";
// import history from '../history';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const location = history.location;
console.log(location.pathname);

// import { withRouter } from "react-router-dom";

class FormAdd extends React.Component {
  state = {
    newReview: {
      title: this.props.title || "",
      author: this.props.author || "",
      review: this.props.review || "",
      publisher: this.props.publisher || "",
      yearPublished: this.props.yearPublished || "2019",
      genre: this.props.genre || [],
      isbn: this.props.isbn || "",
      linkToBuy: this.props.linkToBuy || "",
      topPick: this.props.topPick || false,
      seoKeyword: this.props.seoKeyword || "",
      url: this.props.url || ""
    },
    image: "",

    genreOptions: [
      "Australian Fiction",
      "Contemporary Fiction",
      "Crime",
      "Essays",
      "Graphic Novels",
      "In Translation",
      "Memoir",
      "Narrative Non-Fiction",
      "Short Stories",
      "Young Adult(YA)"
    ],
    topPickOptions: ["Top Pick"],
    errors: {
      title: "",
      author: "",
      publisher: "",
      yearPublished: "",
      isbn: "",
      linkToBuy: "",
      review: "",
      genre: ""
    }
  };

  handleTextArea = e => {
    e.preventDefault();
    let errors = this.state.errors;
    let value = e.target.value;

    errors.review = value.length < 2 ? "Must enter a review" : "";

    this.setState(
      prevState => ({
        newReview: {
          ...prevState.newReview,
          review: value
        }
      }),
      () => console.log(this.state.newReview)
    );
  };

  handleInput = e => {
    // console.log(e);
    e.preventDefault();
    let errors = this.state.errors;
    let value = e.target.value;
    let name = e.target.name;

    switch (name) {
      case "title":
        errors.title = value.length < 2 ? "Must enter a title" : "";
        break;
      case "author":
        errors.author = value.length < 2 ? "Must enter an author" : "";
        break;
      case "publisher":
        errors.publisher = value.length < 2 ? "Must enter an publisher" : "";
        break;
      case "yearPublished":
        errors.yearPublished = value > 1900 ? "Must enter year" : "";
        break;
      case "isbn":
        errors.isbn = value.length < 2 ? "Must enter ISBN" : "";
        break;
      case "linkToBuy":
        errors.linkToBuy = value.length < 2 ? "Must enter a link" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });

    this.setState(
      prevState => ({
        newReview: {
          ...prevState.newReview,
          [name]: value
        }
      }),
      () => console.log(this.state.newReview)
    );
  };

  handleInputSeo = e => {
    // console.log(e);
    let value = e.target.value;
    let name = e.target.name;
    console.log(value);
    const split = value.split(",");
    console.log(split[0]);

    this.setState(
      prevState => ({
        newReview: {
          ...prevState.newReview,
          [name]: split
        }
      }),
      () => console.log(this.state.newReview)
    );
  };

  handleCheckBox = e => {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newReview.genre.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newReview.genre.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newReview.genre, newSelection];
    }

    let errors = this.state.errors;
    errors.genre = newSelectionArray.length < 1 ? "Must enter a genre" : "";

    this.setState(
      prevState => ({
        newReview: { ...prevState.newReview, genre: newSelectionArray }
      }),
      () => console.log(this.state.newReview)
    );
  };

  handleCheckbox = e => {
    if (e.target.checked === true) {
      this.setState(
        prevState => ({
          newReview: {
            ...prevState.newReview,
            topPick: true
          }
        }),
        () => console.log(this.state.newReview)
      );
    } else {
      this.setState(
        prevState => ({
          newReview: {
            ...prevState.newReview,
            topPick: false
          }
        }),
        () => console.log(this.state.newReview)
      );
    }
  };

  handleYear = e => {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newReview: {
          ...prevState.newReview,
          yearPublished: value
        }
      }),
      () => console.log(this.state.newReview)
    );
  };

  handleClearForm = e => {
    e.preventDefault();
    this.setState({
      newReview: {
        title: "",
        author: "",
        review: "",
        publisher: "",
        yearPublished: "",
        genre: [],
        isbn: "",
        linkToBuy: "",
        topPick: "",
        seoKeyword: ""
      }
    });
  };

  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      val => val.length > 0 && (valid = false)
    );
    return valid;
  };

  handleUploadImage = e => {
    e.preventDefault();
    console.log("in image");
    const file = e.target.parentNode.childNodes[10].files[0];
    console.log(file);
    this.setState({ image: file });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (this.validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
    const newReview = this.state.newReview;
    // const updatedReview = this.state.newReview;
    const file = this.state.image;
    const id = this.props.id;
    const data = { id: id, newReview: newReview };

    if (window.location.pathname.split("/").pop() === "adminshow") {
      console.log("in adminshow");

      const stringifyData = JSON.stringify(data);
      const formData = new FormData();
      formData.append("data", stringifyData);
      formData.append("file", file);

      axios
        .put(`${process.env.REACT_APP_API_URL}/updateReview`, formData)
        .then(res => {
          alert("review updated");
          this.props.refresh(res);
        })
        .catch(err => {
          console.log(`update review error with error: ${err}`);
        });
    } else {
      console.log("in addreview");
      const stringifyData = JSON.stringify(newReview);
      const formData = new FormData();
      formData.append("data", stringifyData);
      formData.append("file", file);

      axios
        .post(`${process.env.REACT_APP_API_URL}/createReview`, formData)
        .then(res => {
          alert("Review Saved");
          console.log(res);
          this.props.history.push("/adminshow");
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  };

  handleCancelForm = (e) => {
    e.preventDefault();
    console.log("hi");
    console.log(this.props);
    if (location.pathname === "/adminshow"){
      window.location.reload()
    } else {
      this.props.history.push("/adminshow");
    }
  }

  render() {
    const { errors } = this.state;
    let color;
    if (this.props.adding === true) {
      color = "formContainer box0"
    }else{
      color = "formContainer box1"
    }

    return (
      <>
        {/* <div className="formContainer" > */}
        <div className={color} >

          <form
            className="form-add"
            onSubmit={this.handleFormSubmit}
            encType="multipart/form-data"
          >
            <FormInput
              inputType={"text"}
              title={"Book Title"}
              name={"title"}
              value={this.state.newReview.title}
              placeholder={"Enter book name"}
              handleChange={this.handleInput}
            />{" "}
            {errors.title.length > 0 && (
              <span className="error">{errors.title}</span>
            )}
            <FormInput
              inputType={"text"}
              title={"Author"}
              name={"author"}
              value={this.state.newReview.author}
              placeholder={"Enter author name"}
              handleChange={this.handleInput}
            />{" "}
            {errors.author.length > 0 && (
              <span className="error">{errors.author}</span>
            )}
            <FormTextArea
              title={"Review"}
              rows={10}
              value={this.state.newReview.review}
              name={"review"}
              handleChange={this.handleTextArea}
              placeholder={"Enter your review"}
            />
            {errors.review.length > 0 && (
              <span className="error">{errors.review}</span>
            )}
            <FormInput
              inputType={"text"}
              title={"Publisher"}
              name={"publisher"}
              value={this.state.newReview.publisher}
              placeholder={"Enter publisher"}
              handleChange={this.handleInput}
            />{" "}
            {errors.publisher.length > 0 && (
              <span className="error">{errors.publisher}</span>
            )}
            <FormInput
              inputType={"number"}
              name={"yearPublished"}
              title={"Year Published"}
              value={this.state.newReview.yearPublished}
              placeholder={"Published Year"}
              handleChange={this.handleYear}
            />{" "}
            {errors.yearPublished.length > 0 && (
              <span className="error">{errors.yearPublished}</span>
            )}
            <label htmlFor="image-upload">Upload Image</label>
            <input
              type="file"
              name="image-upload"
              id="image-load"
              onChange={this.handleUploadImage}
            />
            {this.state.newReview.url && (
              <div>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.newReview.url}
                  readOnly
                />
              </div>
            )}
            <FormCheckbox
              title={"Genre"}
              name={"genre"}
              options={this.state.genreOptions}
              selectedOptions={this.state.newReview.genre}
              handleChange={this.handleCheckBox}
            />{" "}
            {errors.genre.length > 0 && (
              <span className="error">{errors.genre}</span>
            )}
            <FormInput
              inputType={"text"}
              title={"ISBN"}
              name={"isbn"}
              value={this.state.newReview.isbn}
              placeholder={"Enter ISBN"}
              handleChange={this.handleInput}
            />{" "}
            {errors.isbn.length > 0 && (
              <span className="error">{errors.isbn}</span>
            )}
            <FormInput
              inputType={"text"}
              title={"Link to Buy"}
              name={"linkToBuy"}
              value={this.state.newReview.linkToBuy}
              placeholder={"Enter URL"}
              handleChange={this.handleInput}
            />{" "}
            {errors.linkToBuy.length > 0 && (
              <span className="error">{errors.linkToBuy}</span>
            )}
            <div className="form-group">
              <label htmlFor="check">Top Pick</label>
              <input
                onChange={this.handleCheckbox}
                type="checkbox"
                id="checkbox"
                name="topPick"
                checked={this.state.newReview.topPick}
              />
            </div>
            <FormInput
              inputType={"text"}
              title={"Seo Keywords (Separate by comma)"}
              name={"seoKeyword"}
              value={this.state.newReview.seoKeyword}
              placeholder={"Enter SEO Keywords"}
              handleChange={this.handleInputSeo}
            />{" "}
            <Button
              action={this.handleFormSubmit}
              type={"primary"}
              title={"Submit"}
              // style={buttonStyle}
            />{" "}
            {/*Submit */}
            <Button
              action={this.handleClearForm}
              type={"secondary"}
              title={"Clear"}
              // style={buttonStyle}
            />{" "}
            <Button
              action={this.handleCancelForm}
              type={"secondary"}
              title={"Cancel"}
            />{" "}
            
          </form>
        </div>
      </>
    );
  }
}

export default FormAdd;
