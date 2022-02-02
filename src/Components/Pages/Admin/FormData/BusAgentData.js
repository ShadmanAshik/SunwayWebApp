import axios from "axios";
import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";

class Snippet extends React.Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.snippet.fName} {this.props.snippet.fName}
        </td>
        <td>{this.props.snippet.businessemail}</td>
        <td>{this.props.snippet.businessNum}</td>
        <td>{this.props.snippet.whatsappnumber}</td>
        <td>{this.props.snippet.businessName}</td>
        <td>{this.props.snippet.webaddress}</td>
        <td>{this.props.snippet.businessAddress}</td>
        <td>{this.props.snippet.country}</td>
        <td>{this.props.snippet.tradelicense}</td>
        
        
      </tr>
    );
  }
}
export class BusAgentData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snippets: [],
    };
    this.updateSnippetList = this.updateSnippetList.bind(this);
    this.config = {
      headers: {
        Authorization: "Token " + localStorage.getItem("auth_token"),
      },
    };
  }
  updateSnippetList() {
    axios
      .get(this.props.base_url + "/form/businessagentget/", this.config)
      .then((response) => {
        console.log("==> response: ", response);
        this.setState({ snippets: response.data });
      })
      .catch((errors) => {
        console.log("===> errors: ", errors);
      });
  }
  componentDidMount() {
    this.updateSnippetList();
  }
  render() {
    return (
      <div>
        <Container>
          <h1>Business Agent's Data</h1>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Business Email</th>
                <th>Business Phone</th>
                <th>Whatsapp</th>
                <th>Business Name</th>
                <th>Wbsite/Social URL</th>
                <th>Business Address</th>
                <th>Country</th>
                <th>Trade License</th>
              </tr>
            </thead>
            <tbody>
              {this.state.snippets.map((value, index) => {
                return <Snippet snippet={value} />;
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
export default BusAgentData;
