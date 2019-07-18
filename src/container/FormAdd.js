import React from "react";
import axios from "axios";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import FormCheckbox from "../components/FormCheckbox";
import Button from "../components/Button";
import "../container/FormAdd.css";

class FormAdd extends React.Component {
  state = {
    newReview: {
      title: this.props.title || "",
      author: this.props.author || "",
      review: this.props.review || "",
      publisher: this.props.publisher || "",
      yearPublished: this.props.yearPublished || "2000",
      genre: this.props.genre || [],
      isbn: this.props.isbn || "",
      linkToBuy: this.props.linkToBuy || "",
      topPick: this.props.topPick || "",
      seoKeyword: this.props.seoKeyword || ""
    },

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

  handleFormSubmit = () => {};

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

  handleFormSubmit = (e, props) => {
    e.preventDefault();
    if (this.validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
    console.log(this.props.id);
    const id = this.props.id;
    const newReview = this.state.newReview;
    console.log(newReview);
    const data = { id: id, newReview: newReview };

    if (window.location.pathname.split("/").pop() === "adminshow") {
      axios
        .put(`${process.env.REACT_APP_API_URL}/updateReview`, data)
        .then(res => {
          this.props.refresh(res);
        })
        .catch(err => {
          console.log(`update review error with error: ${err}`);
        });
    } else {
      axios
        .post("http://localhost:5500/seed", newReview)
        .then(res => {
          console.log("Review Saved");
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <div className="formContainer">
          <form className="form-add" onSubmit={this.handleFormSubmit}>
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
            {/* Clear the form */}
          </form>
        </div>
      </>
    );
  }
}

export default FormAdd;
