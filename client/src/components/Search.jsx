import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <form className="form-inline">
        <input className="form-control mr-sm-1" placeholder="Add a users repos from GitHub" value={this.state.term} onChange={this.onChange} />
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.search}>Search</button>
      </form>
    )
  }
}

export default Search;