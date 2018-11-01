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
  font-size:24px;
`;

const HarvestedEmails = styled.div`
    font-size: 40%;
`;

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
          if (this.state.newData  === "") {
            alert("enter a valid email address");
            return false;
        }else{
            this.dataRef.push(this.state.newData);
            console.log(event);
            alert("Thanks, we will be in touch");
          }
        }

    render() {
        return (
        
            <div id="newsLetterEmail">
              <form className="App--form" onSubmit={this.handleSubmit}>
              
              Enter your email address to signup for our news
              <br/>
              <Input 
                defaultValue="Your email address"  
                inputColor="rebeccapurple" 
                type="text"
                value={this.state.newData}
                onChange={this.handleChange}
                autofocus
                />
                <br/>
                <Input type="submit"  defaultValue="SUBMIT" bgColor="yellow" inputColor="rebeccapurple" />

              </form>

        
                <HarvestedEmails>
                    <pre className="App--data">
                        {JSON.stringify(this.state.data, null, 2)}
                    </pre>
                </HarvestedEmails>
            </div>
        )}
    }
    export default CaptureEmailAddress;