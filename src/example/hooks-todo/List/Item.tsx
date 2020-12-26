import React, { FC, ReactElement } from "react";
import { Iitem } from "../../../types";
import { Button } from 'antd';

interface IProps {
  todo: Iitem;
  toggle: (id: number) => void;
  remove: (id: number) => void;
}

const Item: FC<IProps> = ({ todo, toggle, remove }): ReactElement => {
  const { id, content, completed } = todo;
  const changeCompleted = () => {
    toggle(id);
  };
  const handleFinish = () => {
    remove(id);
  };
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={changeCompleted} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {content}
      </span>
      {/* <button onClick={handleFinish}>完成</button> */}
      <Button onClick={handleFinish}>完成</Button>
    </li>
  );
};

export default Item;
