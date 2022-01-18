import axios from "axios";
import React from "react";

class Snippet extends React.Component{ 
    render(){
        return (
            <tr>
                <td>{this.props.snippet.id}</td>
                <td>{this.props.snippet.name}</td>
                <td><a href={ "http://localhost:8000"+this.props.snippet.photo } alt={this.props.snippet.photo}  >Download</a></td>
            </tr>
        );
    }
}
class SnippetForm extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            name: "",
            photo: ""
        }
    }

    postSnippet(){
        let config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        let form = new FormData();
        form.append('name', this.state.name);
        form.append('photo', this.state.photo);
        axios.post("http://localhost:8000/form/snippets/", form, config).then((response)=>{
            console.log("response: ", response);
        }).catch((errors)=>{
            console.log("===> errors: ", errors);
        });
    }
    render(){ 
        return(<>
            <input type="text" name="name" onChange={
                (e)=>{ 
                    e.preventDefault();
                    this.setState({name: e.target.value});
                }} />
            <input type="file" name="photo" onChange={
                (e)=>{ 
                    e.preventDefault();
                    console.log("e.target: ", e.target);
                    this.setState({photo: e.target.files[0]});
                }} />
            <button type="button" onClick={()=>{ this.postSnippet(); }}>Create Snippet</button>
        </>);
    }
}
class Snippets extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            snippets: []
        }
        this.updateSnippetList = this.updateSnippetList.bind(this);
    }
    updateSnippetList(){
        axios.get("http://localhost:8000/form/snippets/").then((response) => {
            console.log("==> response: ", response);
            this.setState({snippets: response.data});
        }).catch((errors)=>{
            console.log("===> errors: ", errors);
        });
    }
    componentDidMount(){
        this.updateSnippetList();
    }

    render(){
        return(
            <>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Photo</th>
                    </tr>
                    {
                        this.state.snippets.map((value, index)=>{
                            return <Snippet snippet={value} />
                        })
                    }
                </table>
                <SnippetForm snippet_updater={this.updateSnippetList} />
            </>
        );
    }
}

export default Snippets;