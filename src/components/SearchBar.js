import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: 'Search Title'};

  onFormSubmit = (event) => {
    // stops browser submitting form automatically
    event.preventDefault();

    this.props.onSubmitCanNameAnything(this.state.term);
    //console.log(this.state.term);
  }

  render() {
    return (
      <div className="searchContainer">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <input 
                type="text" 
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}/>
            </div>
          </form>
      </div>
    );
  }
}

export default SearchBar;