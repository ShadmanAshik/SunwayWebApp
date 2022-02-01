import axios from "axios";
import React, { Component } from "react";
import { Button, Container} from "react-bootstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
class Snippet extends React.Component {
    viewBtnOnClick(){

    }
    render() {
      
    return (
      <Tr>
        <Td>
          {this.props.snippet.fName} {this.props.snippet.fName}
        </Td>
        <Td>{this.props.snippet.email}</Td>
        <Td>{this.props.snippet.phone}</Td>
        <Td>{this.props.snippet.nationality}</Td>
        <Td>{this.props.snippet.dateofbirth}</Td>
        <Td>{this.props.snippet.applyuniveristy}</Td>
        <Td>{this.props.snippet.majorsub}</Td>
        <Td>{this.props.snippet.profession}</Td>
        <Td>{this.props.snippet.fathername}</Td>
        <Td>{this.props.snippet.mothername}</Td>
        <Td><Button variant="info"size="sm">View More</Button></Td>
        
      </Tr>
    );
  }
}

export class AdmissionApplications extends Component {
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
      .get(this.props.base_url + "form/admissionget/", this.config)
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
          <h1>Admission Applications</h1>
          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Nationality</Th>
                <Th>DoB</Th>
                <Th>Applying University</Th>
                <Th>Major Subject</Th>
                <Th>Applicant's Profession</Th>
                <Th>Father's Name</Th>
                <Th>Mother's Name</Th>
                <Th>Action</Th>
                
              </Tr>
            </Thead>
            <Tbody>
              {this.state.snippets.map((value, index) => {
                return <Snippet snippet={value} />;
              })}
            </Tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default AdmissionApplications;
