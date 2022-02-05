import axios from 'axios';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function Add() {
  const [userInfo, setuserInfo] = useState({
    title: '',
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    });
  } 
  
  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const [hasPhoto, sethasPhoto]=useState(false);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  }
  
  const [isError, setError] = useState(null);
  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      if(userInfo.description.value.length < 50){
        setError('Required, Add description minimum length 50 characters');
        return;
      }
      axios.post("http://127.0.0.1:8000/editor/post/", {
        title: userInfo.title,
        description: userInfo.description.value
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
        <form onSubmit={addDetails} className="update__forms">
          <h3 className="myaccount-content"> Add  </h3>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label className="font-weight-bold"> Title <span className="required"> * </span> </label>
              <input type="text" name="title" value={userInfo.title} onChange={onChangeValue}  className="form-control" placeholder="Title" required />
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
              <textarea style={{display:'none'}} disabled ref={(val) => userInfo.description = val} value={draftToHtml(convertToRaw(description.getCurrentContent())) } />
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