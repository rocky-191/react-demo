import * as React from 'react';
import moment from 'moment';
import { Form, InputNumber, Input, DatePicker, Button, Select } from 'antd';
// import DynamicItem from './DynamicItem'

const FormItem = Form.Item;
const Option = Select.Option;

// 后台返回的数据格式
const data = [
  {
    'field': 'jobid',
    'text': '工号',
    'errorMessage': '请输入工号',
    'required': true,
    'type': 'int',
    'labelValue': 100
  },{
    'field': 'date',
    'text': '日期',
    'errorMessage': '请输入日期',
    'required': false,
    'type': 'date',
    'labelValue': '2017-10-20'
  },{
    'field': 'username',
    'text': '用户名',
    'errorMessage': '请输入用户名',
    'required': true,
    'type': 'char',
    'labelValue': 'hello world'
  },{
    'field': 'customer',
    'text': '客户',
    'errorMessage': '请输入客户',
    'required': true,
    'type': 'select',
    'labelValue': '中兴',
    'options': ['贝尔', '中兴', '烽火']
  }
]

// formItem css 样式
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  }
}

// 保存按钮 css 样式
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  }
}

// form css 样式
const formLayout = {
  width: 400,
  marginTop: 100,
  marginLeft: 'auto',
  marginRight: 'auto'
}

// export interface DynamicFormProps {
  
// }
 
// export interface DynamicFormState {
  
// }
 
class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit=(e) =>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  /**
   * 根据后台返回的 data 中 type 类型生成不同的组件
   * @param item  json
   * @param Component
   */
  switchItem = (item) => {
    const type=item.type
    switch (type) {
      case 'int':
        return <InputNumber style={{ width: '100%' }} />;
      case 'char':
        return <Input />;
      case 'date':
        return <DatePicker style={{ width: '100%' }} />;
      case 'select':
        return (
          <Select>
          {
            item.options.map((option, index) => {
              return (<Option key={option} value={option}>{option}</Option>)
            })
          }
          </Select>
        )
      default:
        return <Input />;
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} style={formLayout}>
        {
          data.map((item, index) => {
            // type 为 date 日期格式需要强制转化为 moment 格式
            item.labelValue = item.type === 'date' ? moment(item.labelValue, 'YYYY-MM-DD') : item.labelValue;
            return (
              <FormItem
                key={index}
                {...formItemLayout}
                label={item.text}
                hasFeedback

              >
                {getFieldDecorator(item.field, {
                  initialValue: item.labelValue,
                  rules: [{
                    required: item.required,
                    message: item.errorMessage
                  }]
                })(
                  this.switchItem(item)
                )}
              </FormItem>
            )
          })
        }
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </FormItem>
      </Form>
    );
  }
}
 
export default Form.create()(DynamicForm);