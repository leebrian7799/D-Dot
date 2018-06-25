import React, { Component } from 'react';

class CommentBox extends React.Component {
  render (){
    return <div>
      <CommentList />
      <CommentForm />
    </div>;
  }
}

const CommentList = () => {
  return (
    <div className="commentList">
      <Comment author = "Kevin" >This is a comment</Comment>
    </div>
  );
}

const CommentForm = () => {
  return (
    <div className="commentForm">
    </div>
  );
}

const Comment = (props) => {
  function rawMarkup (){
      var md = new Remarkable();
      var rawMarkup = md.render(props.children.toString());
      return { __html: rawMarkup };
  };


  return (
    <div className="comment">
      <h2 className="commentAuthor">
          {props.author}
      </h2>
      <span dangerouslySetInnerHTML={rawMarkup()} />

    </div>
  );
}




export default CommentBox;
