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
        
        <td>{this.props.snippet.address}</td>
        <td>{this.props.snippet.city}</td>
        <td>{this.props.snippet.degreeobtained}</td>
        <td>{this.props.snippet.EducationOrganization}</td>
        <td>{this.props.snippet.EducationBackground}</td>
        <td>{this.props.snippet.gender}</td>
        <td>{this.props.snippet.tuitionarea}</td>
      </tr>
    );
  }
}

export class TutorData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snippets: [],
    };
    this.updateSnippetList = this.updateSnippetList.bind(this);
    this.config = {
      'headers': {
        'Authorization': "Token "+localStorage.getItem('auth_token')
      }
    }
  }

  updateSnippetList() {
    axios
      .get(this.props.base_url+"form/betutorget/",this.config)
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
          <h1>Tutor's Information</h1>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>              
                <th>City</th>
                <th>Degree Obtained</th>
                <th>Edu Org</th>
                <th>Edu Background</th>
                <th>Gender</th>
                <th>Tuition Area</th>
                
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
export default TutorData;
