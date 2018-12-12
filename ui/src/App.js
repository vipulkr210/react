import React, {Component} from 'react';

import Popup from "reactjs-popup";
import Modal from "react-awesome-modal";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Client from "./Client";

import reactLogo from './images/react.svg';
import playLogo from './images/play.svg';
import scalaLogo from './images/scala.png';

import './App.css';

const Tech = ({ match }) => {
	  return <div>Current Route: {match.params.tech}</div>
	};
	const Tech1 = ({ match }) => {
		  return <div>Current Route1: {match.params.tech1}</div>
		};
class Vipul extends Component {constructor(props) {
    super(props);
    this.state = {
        visible : false
    }
}

openModal() {
    this.setState({
        visible : true
    });
}

closeModal() {
    this.setState({
        visible : false
    });
}
	render() {
		var name= "Akash";
		var comp = this.props.component;
		return (
				<section>
				<h1>React-Modal Examples</h1>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                
				<Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                <div>
                    <h1>Title</h1>
                    <p>Some Contents</p>
                    <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                </div>
            </Modal>
            </section>
		);
	}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
  }

  async componentDidMount() {
    Client.getSummary(summary => {
      this.setState({
        title: summary.content
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Welcome to {this.state.title}!</h1>
          <nav>
            <Link to="scala" >
              <img  width="450" height="300"  src={scalaLogo} alt="Scala Logo" />
            </Link>
            <Link to="play" >
              <img width="400" height="400" src={playLogo} alt="Play Framework Logo" />
            </Link>
            <Link to="react" >
              <img width="400" height="400" src={reactLogo} className="App-logo" alt="React Logo"/>
            </Link>
          </nav>
          <Route path="/:tech" component={Tech} />
          <Route path="/:tech1" component={Tech1} />
           <div>
          	<Vipul component={Tech}/>
            <h2>Hi From Scala React Play</h2>
            <h3>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/yohangz/scala-play-react-seed">
                java-play-react-seed
              </a>
            </h3>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
