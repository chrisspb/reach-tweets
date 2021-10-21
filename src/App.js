import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'; import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleClick(e) {
    e.preventDefault();
    const name = this.state.name;
    if (!!!name.trim()) { return }
    const isProduction = true;
    const url = isProduction ? '/tweets/' : '/';
    this.props.history.push(url + name.trim());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Reach tweets for:</p>
          <form onSubmit={this.handleClick} >
            <input onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} style={{ height: 50 }} />
            <Button style={{ height: 50, marginTop: -10, marginLeft: 5 }} type="submit" variant="primary" onClick={(e) => { this.handleClick(e) }}>Reach</Button>
          </form>
        </header>
      </div>

    );
  }

}

export default App;
