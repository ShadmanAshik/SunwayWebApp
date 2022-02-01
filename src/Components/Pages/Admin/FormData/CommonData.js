import axios from "axios";
import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';



class Snippet extends React.Component {
    render() {
      
      return (
        <tr>
          <td>{this.props.snippet.fName} {this.props.snippet.fName}</td>
          <td>{this.props.snippet.email}</td>
          <td>{this.props.snippet.phone}</td>
          <td>{this.props.snippet.studyLevel}</td>
          <td>{this.props.snippet.country}</td>
          <td>{this.props.snippet.counselMode}</td>
        </tr>
      );
    }
  }
export class CommonData extends Component {
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
        };
      }
      
    
    
      updateSnippetList() {
        axios
          .get(this.props.base_url+"/form/commonformget/",this.config)
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
              <h1>Common Form's Data</h1>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Study Level</th>
                    <th>Country</th>
                    <th>Counselling Mode</th>
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
    
export default CommonData

