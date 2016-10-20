import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

import actions from './actions/actions';
import {store} from './store/store';

class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      count: store.getCount()
    };

    this.increment = this.increment.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount(){
    store.addChangeListener(this.onChange);
  }

  componentWillUnmount(){
    store.removeChangeListener(this.onChange);
  }

  increment(){
    actions.increment();
  }

  onChange(){
    this.setState ({
      count: store.getCount()
    });
  }

  render(){
    return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
        </div>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
);
