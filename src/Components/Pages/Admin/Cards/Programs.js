import axios from 'axios';
import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';


class Card extends React.Component {
  render() {
    
    return (
      <tr>
        <td>{this.props.card.name}</td>
        <td>{this.props.card.email}</td>
        <td>{this.props.card.phone}</td>
        <td>{this.props.card.message}</td>
      </tr>
    );
  }
}


export class Programs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cards: [],
        };
        this.updateCardList = this.updateCardList.bind(this);
        this.config = {
          'headers': {
            'Authorization': "Token "+localStorage.getItem('auth_token')
          }
        };
      }
      
    
    
      updateCardList() {
        axios
          .get(this.props.base_url+"/form/contactusget/",this.config)
          .then((response) => {
            console.log("==> response: ", response);
            this.setState({ cards: response.data });
          })
          .catch((errors) => {
            console.log("===> errors: ", errors);
          });
      }
      componentDidMount() {
        this.updateCardList();
      }
  render() {
    return <div>
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
                return <Card snippet={value} />;
              })}
            </tbody>
          </Table>
        </Container>
    </div>;
  }
}

export default Programs;
