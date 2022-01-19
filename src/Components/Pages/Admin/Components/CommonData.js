import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export class CommonData extends Component {
    constructor(){
        super();
        this.state={
            dataOfTable:[]
        };
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/cfd/Contactformdata/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                dataOfTable:data
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
       
        const empData=this.state.dataOfTable;
        const rows=empData.map((formdata)=>
            <tr key={formdata.id}>
                <td>{formdata.fName}</td>
                <td>{formdata.lName}</td>
                <td>{formdata.email}</td>
                <td>{formdata.countryCode}{formdata.phone}</td>
                <td>{formdata.country}</td>
                <td>{formdata.counselingMode}</td>
                {/* <td>
                    <Link to={'update/'+formdata.id} className="btn btn-info mr-2">Update</Link>
                    <button onClick={()=>this.deleteData(formdata.id)} className="btn btn-danger">Delete</button>
                </td> */}
            </tr>
        );
        return (
            <Container>
                <h1>Common Information of Students</h1>
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Country</th>
                        <th>Counselling Mode</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            </Container>
            
        );
    }
}

export default CommonData
