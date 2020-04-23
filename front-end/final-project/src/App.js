import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'Blah Blah'
      },
      inputs: {
        title: null,
        description: null,
        completed: null,
        id: null
      }
    }
  }

  handleView = (view, data) => {
    let pageTitle = '';
    let inputs = {
      title: '',
      description: '',
      completed: '',
      id: null
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      inputs: inputs
    })
  }

  render() {
    return(
      <div>
        FUCK
        <Main
        handleView={this.handleView}
        view={this.state.view}
        />
      </div>
    )
  }
}

export default App;
