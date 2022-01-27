import axios from "axios";
import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";


class Snippet extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.snippet.fName} {this.props.snippet.lName}</td>
        <td>{this.props.snippet.email}</td>
        <td>{this.props.snippet.phone}</td>
        <td>{this.props.snippet.skill}</td>
        <td>{this.props.snippet.counselMode}</td>
        <td>{this.props.snippet.country}</td>
      </tr>
    );
  }
}
export class SkillFormData extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      snippets: [],
    };
    this.updateSnippetList = this.updateSnippetList.bind(this);
  }
  updateSnippetList() {
    axios
      .get(this.props.base_url+"form/skilldev/")
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
          <h1>Skill Development Form's Data</h1>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Skill</th>
                <th>Counselinng Mode</th>
                <th>Country</th>

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

export default SkillFormData;
