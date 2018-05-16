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
      errors: {}
    };
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(e){
    debugger
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
    this.setState({ imageUrl: reader.result, imageFile: file});
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }


  handleUploadImage(e) {
    if (!this.state.imageFile) {
      return;
    }
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[image]', this.state.imageFile);
    formData.append('photo[author_id]', this.props.currentUser.id);
    this.props.createPhoto(formData).then(res => {
      this.setState({imageUrl: null});
      this.closeModal();
      let newPath = `/${this.props.currentUser.username}`;
      if (newPath !== this.props.location.pathname) {
        this.props.history.push(newPath);
      }
    });
  }


  render(){
    return (
        <div>
          <input type="file" onChange={this.updateFile} />
          <img src={this.state.imageUrl} />
          <input type="file" id="file" multiple="multiple" onChange={this.updateFiles}></input>
        </div>
    );
  }
}
//<input onChang={()=>this.handleImagePreview} ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Type in name of file" />

export default withRouter(UploadForm);
