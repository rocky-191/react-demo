import React, { FC, ReactElement } from "react";
import Item from "./Item";
import { Iitem } from "../../../types";

interface Iprops {
  todolist: Iitem[];
  toggle: (id: number) => void;
  remove: (id: number) => void;
}

const List: FC<Iprops> = (props): ReactElement => {
  const { todolist, toggle, remove } = props;
  return (
    <div>
      <ul>
        {todolist &&
          todolist.map((item:Iitem) => {
            return (
              <Item
                key={item.id}
                todo={item}
                toggle={id => toggle(id)}
                remove={id => remove(id)}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default List;
