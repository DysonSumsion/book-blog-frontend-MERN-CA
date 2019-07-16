import React from 'react';
import FormInput from '../components/FormInput'
import FormTextArea from '../components/FormTextArea'
import FormCheckbox from '../components/FormCheckbox'




class FormAdd extends React.Component {
  state = {
    newReview: {
      title: "",
      author: "",
      review: "",
      publisher: "",
      year: "",
      genre: [],
      isbn: "",
      linkToBuy: "",
      topPick: "",
      seoKeyword: "",

    },
    
    genreOptions: ["Australian Fiction", "Contemporary Fiction", "Crime", "Essays", "Graphic Novels", "In Translation", "Memoir", "Narrative Non-Fiction", "Short Stories", "Young Adult(YA)"],
    topPickOptions: ["Top Pick"]
  }
  

handleFormSubmit = () => {
}


handleTextArea =(e) => {
  console.log("Inside handleTextArea");
  let value = e.target.value;
  this.setState(
    prevState => ({
      newReview: {
        ...prevState.newReview,
        review: value
      }
    }),
    () => console.log(this.state.newReview)
  );
}

handleInput= (e) => {
  console.log(e);
  let value = e.target.value;
  let name = e.target.name;

  this.setState(
    prevState => ({
      newReview: {
        ...prevState.newReview,
        [name]: value
      }
    }),
    () => console.log(this.state.newReview)
  );
}

handleCheckBox = (e) => {
  const newSelection = e.target.value;
  let newSelectionArray;

  if (this.state.newReview.genre.indexOf(newSelection) > -1) {
    newSelectionArray = this.state.newReview.genre.filter(
      s => s !== newSelection
    );
  } else {
    newSelectionArray = [...this.state.newReview.genre, newSelection];
  }

  this.setState(prevState => ({
    newReview: { ...prevState.newReview, genre: newSelectionArray }
  }));
}

handleCheckBoxTop = (e) => {
  let value = e.target.value;
  let name = e.target.name;
  // console.log(newSelection);

  this.setState(
    prevState => ({
      newReview: {
        ...prevState.newReview,
        [name]: value
      }
    }),
    () => console.log(this.state.newReview)
  );

  // if (this.state.newReview.topPick.indexOf(newSelection) > -1) {
  //   newSelectionArray = this.state.newReview.topPick.filter(
  //     s => s !== newSelection
  //   );
  // } else {
  //   newSelectionArray = [...this.state.newReview.topPick, newSelection];
  // }

  // this.setState(prevState => ({
  //   newReview: { ...prevState.newReview, topPick: newSelectionArray }
  // }));
}

handleYear = (e) => {
  let value = e.target.value;
  this.setState(
    prevState => ({
      newReview: {
        ...prevState.newReview,
        year: value
      }
    }),
    () => console.log(this.state.newReview)
  );
}

  render() {

    return (
      <>
      <div>
      <form className="form-add" onSubmit={this.handleFormSubmit}>
          <FormInput
            inputType={"text"}
            title={"Book Title"}
            name={"title"}
            value={this.state.newReview.title}
            placeholder={"Enter book name"}
            handleChange={this.handleInput}
          />{" "}
          <FormInput
            inputType={"text"}
            title={"Author"}
            name={"author"}
            value={this.state.newReview.author}
            placeholder={"Enter author name"}
            handleChange={this.handleInput}
          />{" "}
          <FormTextArea
            title={"Review"}
            rows={10}
            value={this.state.newReview.review}
            name={"currentPetInfo"}
            handleChange={this.handleTextArea}
            placeholder={"Enter your review"}
            />
          <FormInput
            inputType={"text"}
            title={"Publisher"}
            name={"publisher"}
            value={this.state.newReview.publisher}
            placeholder={"Enter publisher"}
            handleChange={this.handleInput}
          />{" "}
          <FormInput
            inputType={"number"}
            min="2010"
            name={"year"}
            title={"Year Published"}
            value={this.state.newReview.year}
            placeholder={"Published Year"}
            handleChange={this.handleYear}
          />{" "}
          <FormCheckbox 
            title={"Skills"}
            name={"skills"}
            options={this.state.genreOptions}
            selectedOptions={this.state.newReview.genre}
            handleChange={this.handleCheckBox}
            />{" "}
          
          <FormInput
            inputType={"text"}
            title={"ISBN"}
            name={"isbn"}
            value={this.state.newReview.isbn}
            placeholder={"Enter ISBN"}
            handleChange={this.handleInput}
          />{" "}

          <FormInput
            inputType={"text"}
            title={"Link to Buy"}
            name={"linkToBuy"}
            value={this.state.newReview.linkToBuy}
            placeholder={"Enter URL"}
            handleChange={this.handleInput}
          />{" "}
          <FormCheckbox 
            title={"Top Pick"}
            name={"top-pick"}
            options={this.state.topPickOptions}
            selectedOptions={this.state.newReview.topPick}
            handleChange={this.handleCheckBoxTop}
            />{" "}
            <FormInput
            inputType={"text"}
            title={"Seo Keywords"}
            name={"seoKeyword"}
            value={this.state.newReview.seoKeyword}
            placeholder={"Enter SEO Keywords"}
            handleChange={this.handleInput}
          />{" "}


          
          
          {/* Clear the form */}
        </form>
  
      </div>
      
      </>
     
    );

  }
  
}


export default FormAdd;