import axios from 'axios';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function Add() {
  const [content, setcontent] = useState({
    title: '', 
    description: ''
  });
  const onChangeValue = (e) => {
    setcontent({
      ...content,
      [e.target.name]:e.target.value
    });
  } 
  
  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const [pgName, setpgName]=useState('');
  const [hasPhoto, sethasPhoto]=useState(false);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  }
  
  const [isError, setError] = useState(null);
  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      if(content.description.value.length < 50){
        setError('Required, Add description minimum length 50 characters');
        return;
      }
      axios.post("http://127.0.0.1:8000/editor/post/", {
        title: content.title,
        description: content.description.value,
        photo: content.photo,
        pgName: content.pgName,
      })
      .then(res => {
        if(res.data.success === true){
        }
      })
    } catch (error) { throw error;}    
  } 
   
return ( 
<>
  <div className="App">
    <div className="container">
      <div className="row"> 
        <form onSubmit={(e)=>addDetails(e)} className="update__forms">
          <h3 className="myaccount-content"> Add  </h3>
          <div className="Application-input ">
              <select
                id="pgName"
                type="text"
                name="pgName"
                className="Application-input-field"
                value={content.pgName}
                onChange={(e)=>{setpgName(pgName)}}
                required
              >
                <option value=""></option>
                <option value="English Spoken">English Spoken</option>
                <option value="Communicative English">Communicative English</option>
                <option value="Academic English">Academic English</option>
                </select>
              <label htmlFor="country" className="Application-input-label">
                Page Name:<span style={{color:"red"}}>*</span>
              </label>
            </div>
          <input
              id="profilephoto"
              type="file"
              name="profilephoto"
              className="Application-input-field-file"
              onChange={
                (e)=>{ 
                    e.preventDefault();
                    console.log("===> values 1st: ", content);
                    setcontent({...content, photo: e.target.files[0]});
                    console.log("===> values 2nd: ", content);
                }}
              accept="image/png, image/jpeg"
            />
          <div className="form-row">
            <div className="form-group col-md-12">
              <label className="font-weight-bold"> Title <span className="required"> * </span> </label>
              <input type="text" name="title" value={content.title} onChange={onChangeValue}  className="form-control" placeholder="Title" required />
            </div>
            <div className="form-group col-md-12 editor">
              <label className="font-weight-bold"> Description <span className="required"> * </span> </label>
                <Editor
                  editorState={description}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorStateChange}
                />
              <textarea style={{display:'none'}} disabled ref={(val) => content.description = val} value={draftToHtml(convertToRaw(description.getCurrentContent())) } />
            </div>
            {isError !== null && <div className="errors"> {isError} </div>}
            <div className="form-group col-sm-12 text-right">
              <button type="submit" className="btn btn__theme"> Submit  </button>
            </div> 
          </div> 
        </form>
      </div>
    </div>
  </div>
</>
)
}
export default Add