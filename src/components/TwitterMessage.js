import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
     
    };
  }
  handleChange = event =>{
    if(event.target.value.length <= this.props.maxChars)
    return (this.setState({
      message:event.target.value
    }));
    else
    return null;
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event=> this.handleChange(event)} value={this.state.message} />
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;