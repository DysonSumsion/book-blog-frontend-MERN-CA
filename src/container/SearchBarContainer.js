import React from "react";
import axios from "axios";
import SearchBar from '../components/SearchBar'

class SearchBarContainer extends React.Component {
    state = {
       allReviews: [],
       searchTerm: '',
       matchReviews: []
    };

    componentDidMount() {
       this.getReviews();
    }

    handleFormSubmit = (e) => {
      e.preventDefault()
      console.log(e.target.name.value)
      const searchTerm = this.state.searchTerm
      //update match review
      let found = []
      if (searchTerm.length > 0) {
        found = this.state.allReviews.filter(function(item) {
          return item.title.toLowerCase().match( searchTerm );
        });
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
      //this.setState({reviews})
      
    }
    getReviews = async () => {
      let res = await axios.get(`${process.env.REACT_APP_API_URL}/reviews`);
      let { reviews } = res.data;
      this.setState({ allReviews: reviews });
    };

    render() {
      console.log(this.state.allReviews)
      if (!this.state.allReviews) {
        return null
      } else {
        //console.log(this.state.response)
        return (
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <SearchBar
            inputType={"text"}
            name={"name"}
            value={this.state.reviews}
            placeholder={"search by title"}
            handleChange={this.handleInput}
          />{" "}
          </form>
         );
       }
      }
}

export default SearchBarContainer



