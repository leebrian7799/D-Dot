import React from "react";
import { Link, withRouter } from "react-router-dom";


class UploadForm extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      title: '',
      description: '',
      image: null,
      imageFile: null,
      uploading: false,
      errors: {}
    };
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.formatForm = this.formatForm.bind(this);
  }

  updateFile(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
    this.setState({ imageUrl: reader.result, imageFile: file});
    if (file) {
      reader.readAsDataURL(file);
      this.setState({uploading: true});
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  handleUploadImage(e) {
    e.preventDefault();
    if (!this.state.imageFile) {
      return;
    }
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[image]', this.state.imageFile);
    formData.append('photo[author_id]', this.props.currentUser.id);
    this.props.createPhoto(formData).then(res => {
        this.props.closeModal();
        this.props.history.push('/feed');
    });
  }
  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value });
    };
  }

  formatForm(){
    if (!this.state.uploading){
      return (
      <div className="upload-form">
        <img src={this.state.imageUrl} />
        <input type="file" id="file" multiple="multiple" onChange={this.updateFile}></input>
      </div>
      );
    } else {
      return (
        <div className="upload-form" >
          <img src={this.state.imageUrl} />
          <form onSubmit={this.handleUploadImage}>
            Title: <input type="text" onChange={this.handleChange('title')} required/><br/>
          Description: <textarea type="text" onChange={this.handleChange('description')} required/><br/>
          <input type="submit" />
          </form>
        </div>
      );
    }
  }

  render(){
    return this.formatForm();
  }
}

export default withRouter(UploadForm);
