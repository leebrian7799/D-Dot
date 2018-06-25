import React from 'react';
import PhotoItemContainer from '../photo/photo_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPhotos();
  }

  render() {
    let that = this;
    let allPhotos;
    if (that.props.photos.length) {
      allPhotos = that.props.photos.map( (photo, idx) => {
        return (
          <PhotoItemContainer key={idx} photo={photo} />
        );
      }).reverse();
    }

    return (
        <div className = "imageList">
          {allPhotos}
        </div>

    );
  }
}



export default Feed;
