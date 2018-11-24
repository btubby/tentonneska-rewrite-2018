import React, { Component } from "react";

import { database } from "../firebase";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "white"};
  background: ${props => props.bgColor || "grey"};
  border: none;
  border-radius: 3px;
  width: 50%;
  font-size: 15px;
`;
const NewsLetterEmail = styled.div`
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
class CaptureEmailAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    };
    this.dataRef = "";
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({ loading: false });
    this.dataRef = database.ref("/harvested_addresses");
    this.dataRef.on("value", snapshot => {
      this.setState({
        data: snapshot.val(),
        newData: ""
      });
    });
  }

  handleChange(event) {
    const newData = event.target.value;
    this.setState({
      newData
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newAddress = this.state.newData;
    let duplicate = false;

    this.dataRef.once("value", snapshot => {
      snapshot.forEach(function(el) {
        let existingAddress = el.val();
        // console.log('[' + newAddress + '] looping through DB[' + existingAddress + ']');
        if (newAddress === existingAddress) {
          // console.log(existingAddress + ' already in database!');
          duplicate = true;
        }
      });
    });

    if (!validateEmail(newAddress)) {
      // alert('enter a valid email address');
      console.log("invalid email address");
      return false;
    }

    if (duplicate === true) {
      // console.log('address already in');
      alert("You are already a member of the TenTonneSka family");
      return false;
    }

    this.dataRef.push(newAddress);
    alert("Thanks, we will be in touch");
  }

  render() {
    return (
      <NewsLetterEmail>
        <form className="App--form" onSubmit={this.handleSubmit}>
          <Input
            type="text"
            value={this.state.newData}
            onChange={this.handleChange}
            defaultValue="Enter your email address here so we can keep in touch"
            placeholder="Enter your email address here so we can keep in touch"
            inputColor="rebeccapurple"
            autofocus
          />
          <br />
          {/* <Input type="submit" defaultValue="SUBMIT" bgColor="yellow" inputColor="rebeccapurple" /> */}
        </form>
      </NewsLetterEmail>
    );
  }
}
export default CaptureEmailAddress;
