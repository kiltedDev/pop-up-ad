import React, { Component } from 'react';
import TextField from '../components/TextField';

class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailAddress: ''
    }
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleExit = this.handleExit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handleExit() {
    confirm(`You know we aren't letting you out of here until you sign up for free ${this.props.artist} tickets.  Right?`)
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      errors: {},
      emailAddress: ''
    })
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleEmailChange(event) {
    this.setState({ emailAddress: event.target.value })
  }

  render() {

    return(
      <div className="row">
        <form onSubmit={this.handleSubmit} className="popup ten columns">
          <div onClick={this.handleExit}>
            <i className="fa fa-times fa-2x close" aria-hidden="true"></i>
          </div>
          <h2>You have won tickets to see {this.props.artist}!!!!!1!</h2>
          <h4>Please enter your email so we can send you the tickets.</h4>
          <TextField
            content={this.state.emailAddress}
            label='Your Email'
            name='email'
            handlerFunction={this.handleEmailChange}
          />
          <div className="button-group">
            <button className="button" onClick={this.handleClearForm}>Clear</button>
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  };
};

export default Popup;
