import React, { FC, ReactElement,useState } from "react";
import { Iitem } from "../../../types";
import { Input,Button } from 'antd';

interface Iprops {
  todolist: Iitem[];
  addItem: (item: Iitem) => void;
}

const Minput: FC<Iprops> = ({ addItem, todolist }): ReactElement => {
  const [inputVal,setVal]=useState('');
  // const inputRef = useRef<HTMLInputElement>(null);
  const add = (): void => {
    // const val: string = inputRef.current!.value.trim();
    if (inputVal !== "") {
      const isExist = todolist.find(item => item.content === inputVal);
      if (!isExist) {
        addItem({
          id: new Date().getTime(),
          content: inputVal,
          completed: false
        });
        // inputRef.current!.value = "";
        setVal('')
      } else {
        alert("该项已存在");
        return;
      }
    }
  };
  return (
    <div>
      {/* <input type="text" ref={inputRef} />
      <button onClick={add}>添加</button> */}
      <Input style={{width:100}} value={inputVal} onChange={(e)=>setVal(e.target.value)} />
      <Button onClick={add}>添加</Button>
    </div>
  );
};

export default Minput;
