import * as React from 'react';
import { InputNumber, Input, DatePicker, Select } from 'antd';

const Option = Select.Option;

export default function DynamicItem(item){
  console.log(item)
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