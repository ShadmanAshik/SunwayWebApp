import axios from "axios";
import React, { Component } from "react";

class AdmissionApplication extends React.Component{ 
    render(){
        return (
            <tr>
                <td>{this.props.AdmissionApplication.id}</td>
                <td>{this.props.AdmissionApplication.name}</td>
                {/* <td><a href={ this.props.base_url+this.props.AdmissionApplication.photo } alt={this.props.AdmissionApplication.photo}  >Download</a></td> */}
            </tr>
        );
    }
}

class AdmissionApplications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AdmissionApplications: [],
    };
    this.updateAdmissionApplications =
      this.updateAdmissionApplications.bind(this);
      
  }
  
  
  updateAdmissionApplications() {
    axios
      .get(this.props.base_url+"form/admissionget/")
      .then((response) => {
        console.log("==> response: ", response);
        this.setState({ AdmissionApplication: response.data });
      })
      .catch((errors) => {
        console.log("===> errors: ", errors);
      });
  }
  componentDidMount() {
    this.updateAdmissionApplications();
  }


  render() {
    return (
        <>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Photo</th>
            </tr>
            {
                this.state.AdmissionApplications.map((value, index)=>{
                    return <AdmissionApplication AdmissionApplication={value} />
                })
            }
        </table>
        <AdmissionApplication snippet_updater={this.updateAdmissionApplications} />
    </>
    );
  }
}

export default AdmissionApplications;
