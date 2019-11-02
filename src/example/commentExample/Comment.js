import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentForm from "./CommentForm";
import "./commentBox.css"


class Comment extends Component {
  constructor(props){
    super(props)
    this.state={
      comments:[
        {
          author: "Nate",
          content: "Hello React! This is a sample comment.",
        },
        { author: "Kevin", content: "Hello Redux!" },
        { author: "Bood", content: "Hello Rekit!" },
      ]
    }
  }
  handleCommit=(content)=>{
    const oldComments=this.state.comments;
    this.setState({
      comments:[...oldComments,{
        author:"rocky"+new Date().getTime(),
        content
      }]
    })
  }
  render () {
    return (
      <div className="comment-box">
        <h1>comments {this.state.comments.length}</h1>
        <CommentList comments={this.state.comments}></CommentList>
        <CommentForm handleCommit={this.handleCommit}></CommentForm>
      </div>
    );
  }
}

export default Comment;
