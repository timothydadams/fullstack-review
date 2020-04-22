import React from 'react';
import RepoListItem from './RepoListItem.jsx';

const RepoList = (props) => (
  <div>
    <h4> Top {props.repos.length < 25 ? props.repos.length : 25} out of {props.repos.length} repos</h4>
    <div className="list-group">
      {props.repos.map((repo, index) => {
        if (index < 25) {
          return <RepoListItem data={repo} key={index}/>
        }
      })}
    </div>
  </div>
)

export default RepoList;