import React from "react";
import axios from "axios";
import SearchBar from '../components/SearchBar'
//import {Redirect} from 'react-router-dom'

class SearchBarContainer extends React.Component {
   booksFromServer = []

    constructor(props) {
      super();
      
      this.state = {
        searchTerm: '',
        books: ''
     };
     axios.get(`${process.env.REACT_APP_API_URL}/reviews`).then(res =>{
      let reviewsAll = res.data.reviews;
      reviewsAll.forEach(review => {
        this.booksFromServer.push(review.title);
      });
    })
  }

    handleFormSubmit = (e) => {
      e.preventDefault()
      console.log(e.target.name.value)
      const searchTerm = this.state.searchTerm
      //update match review
      let found = []
      if (searchTerm.length > 0) {
        console.log("found")
        //return <Redirect to={`/show/${searchTerm}`} />
        window.location.href =`/show/${searchTerm}`
      }
      if (found.length>0){
        console.log("true")
        this.setState({matchReviews:found})
      } else{
        console.log("false")
      }
    }

    handleInput = (e) => {
      e.preventDefault();
      //  let errors = this.state.errors
      let value = e.target.value;
      console.log(value)
      this.setState({
        searchTerm: value
      });

      let found = this.booksFromServer.filter(function(item) {
        return item.toLowerCase().includes( value.toLowerCase() );
      });
      console.log(found);
      let optionElements = [];
      found.forEach(book=>{
        optionElements.push(<option key={book}>{book}</option>);
      });
      this.setState({books:optionElements});
    }


    render() {
        return (
          <form className="container-fluid" style={{ border: 'solid 0.5pt #138B8A' }} onSubmit={this.handleFormSubmit}>
            <SearchBar
              inputType={"text"}
              name={"name"}
              value={this.state.reviews}
              placeholder={"search by title"}
              handleChange={this.handleInput}
              books={this.state.books}
            />
          </form>
         );
      //  }
       }
      }


export default SearchBarContainer






