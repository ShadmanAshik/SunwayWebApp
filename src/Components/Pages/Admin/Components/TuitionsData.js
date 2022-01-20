import axios from 'axios';
import React, { Component } from 'react'
import { Container, Table } from 'react-bootstrap'


class Snippet extends React.Component {
  render() {
    
    return (
      <tr>
        <td>{this.props.snippet.yourName}</td>
        <td>{this.props.snippet.studentName}</td>
        <td>{this.props.snippet.phone}</td>
        <td>{this.props.snippet.email}</td>
        <td>{this.props.snippet.address}</td>
        <td>{this.props.snippet.requirements}</td>
        <td>{this.props.snippet.Class}</td>
        <td>{this.props.snippet.institution}</td>
        <td>{this.props.snippet.medium}</td>
      </tr>
    );
  }
}
export class TuitionsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snippets: [],
    };
    this.updateSnippetList = this.updateSnippetList.bind(this);
  }
  
  updateSnippetList() {
    axios
      .get(this.props.base_url+"form/looktutor/")
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
    console.log("URL=>", this.props.base_url)
    return (
      <div>
        <Container>
          <h1>Tuition Form's Data</h1>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Parent's Name</th>
                <th>Students's Name</th>
                <th>Phone</th>
                <th>Email</th>              
                <th>address</th>
                <th>requirements</th>
                <th>Class</th>
                <th>institution</th>
                <th>medium</th>
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
export default TuitionsData
