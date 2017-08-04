import React from 'react';
import ReactDom from 'react-dom';

import '../src/style/_main.scss';


class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <p> hello world </p>
      </div>
    )
  }
}

//create a place to put the app
const container = document.createElement('div')
document.body.appendChild(container);
ReactDom.render(<App />, container);
