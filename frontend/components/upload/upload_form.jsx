import React from "react";
import { Link, withRouter } from "react-router-dom";


class UploadForm extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      imageURL: '',
    };
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }


  handleUploadImage(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:3000/${body.file}` });
      });
    });
  }


  render(){
    console.log("In render");
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <button>Upload</button>
        </div>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
        </div>
        <br />
        <img src={this.state.imageURL} alt="img" />
      </form>
    );
  }
}
//
export default withRouter(UploadForm);
