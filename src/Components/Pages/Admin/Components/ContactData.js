import axios from "axios";
import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";

class Snippet extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.snippet.name}</td>
        <td>{this.props.snippet.email}</td>
        <td>{this.props.snippet.phone}</td>
        <td>{this.props.snippet.message}</td>
      </tr>
    );
  }
}
export class ContactData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snippets: [],
    };
    this.updateSnippetList = this.updateSnippetList.bind(this);
  }
  updateSnippetList() {
    axios
      .get("http://127.0.0.1:8000/form/contactus/")
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
          <h1>Contact Us Form's Data</h1>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
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

export default ContactData;
