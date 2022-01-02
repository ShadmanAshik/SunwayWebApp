import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';

export class AgentData extends Component {
    constructor(){
        super();
        this.state={
            dataOfTable:[]
        };
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/contactformdata/')
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

    deleteData(id){
        fetch('http://127.0.0.1:8000/contactfromdata/'+id+'/',{
            method:'DELETE',
            body:JSON.stringify(this.state),
        })
        .then(response=>response)
        .then((data)=>{
            if(data){
                this.fetchData();
            }
        });
    }

    render(){
       
        const empData=this.state.dataOfTable;
        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'fName', headerName: 'First name', width: 130 },
            { field: 'lName', headerName: 'Last name', width: 130 },
            { field: 'email', headerName: 'Email', width: 130 },
            {
                field: 'phoneNumber',
                headerName: 'Phone',
                description: 'This column has a value getter and is not sortable.',
                sortable: false,
                width: 160,
                valueGetter: (params) =>
                  `${params.getValue(params.id, 'countryCode') || ''} ${
                    params.getValue(params.id, 'phone') || ''
                  }`,
              },
            { field: 'country', headerName: 'Intended Country', width: 130 },
            { field: 'counselingMode', headerName: 'Counseling Mode', width: 130 },
            {
              field: 'age',
              headerName: 'Age',
              type: 'number',
              width: 90,
            },
           
          ];
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
                <h1>Agent Informations</h1>
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

export default AgentData

