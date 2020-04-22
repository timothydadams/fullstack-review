import React from 'react';

class RepoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }




  render() {
    return (
      <div className="list-group-item d-flex justify-content-between align-items-center">
        <a href={this.props.data.link}>{this.props.data.fullName}</a>
        <span className="badge badge-secondary">{this.props.data.rating}</span>
      </div>
    )
  }
}

export default RepoListItem;