import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Navigation from './components/Navigation.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      error: null
    }
    this.checkServer = this.checkServer.bind(this);
  }

  componentDidMount() {
    this.checkServer();
    //setInterval(this.checkServer.bind(this), 2000);
  }

  checkServer() {
    $.get({
      url: '/repos'
    })
    .done(data => {
        this.setState({ repos: data });
    })
    .fail(err => { console.log(err) })
  }


  search(term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: '/repos',
      type: 'POST',
      data: JSON.stringify({ 'username': term }),
      contentType: 'application/json'
    })
    .done(data => {
      console.log('i made it this far');
      this.checkServer();
    })
    .fail(err=>{
      console.log(err)
    })
  }

  render () {
    return (
      <div className="container">
        <Navigation onSearch={this.search.bind(this)}/>
        <RepoList repos={this.state.repos}/>
      </div >
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));