import React, {Component} from 'react';
import {Form, Input, Button} from 'antd';

const {TextArea} = Input;
class CommentForm extends Component {
  constructor (props) {
    super (props);
    this.state = {
      commentValue: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleCommit (this.state.commentValue);
    this.setState({
        commentValue:""
    })
  };
  handleText = e => {
    this.setState ({
      commentValue: e.target.value,
    });
  };
  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="评论">
          <TextArea
            rows={4}
            value={this.state.commentValue}
            onChange={this.handleText}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default CommentForm;
