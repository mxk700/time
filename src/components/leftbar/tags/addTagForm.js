import React, {Component} from 'react';
import detalizeTag from './detalizeTag';

class AddTagForm extends Component {
  constructor(props){
    super(props);
    this.saveTag = this.saveTag.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
    this.state = {};
  }

  render(){
      return (
        <div id="addTagForm" className={this.props.showFormFlag}>
          <h3>New Tag</h3>
          <label htmlFor="tagName"> Name</label>
          <input id="tagName" type="input" value={this.state.name}/>
          <br />
          <label htmlFor="tagPicture">Picture</label>
          <input id="tagPicture" type="file" value={this.state.picture}/>
          <br />
          <label htmlFor="tagSound">Sound</label>
          <input id="tagSound" type="file" value={this.state.sound}/>
          <div id="addTagFormControls">
            <button id="saveTag" onClick={this.saveTag}>Save</button>
            <button id="cancel" onClick={this.cancelForm}>Cancel</button>
          </div>
        </div>
      )
  }

  saveTag(){
    let tag = {};
    tag.name    = this.state.name;
    tag.picture = this.state.picture;
    tag.sound   = this.state.sound;

    tag = detalizeTag(tag);
  }


  cancelForm(){
    this.props.hideAddForm();
  }

}

export default AddTagForm;
