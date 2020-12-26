import React, {
  useReducer,
  useEffect,
  useCallback,
  FC,
  ReactElement
} from "react";
import List from "./List";
import Minput from "./Minput";
import { Iitem, Istate } from "../../types";
import { todoReducer,init_todo ,add_todo, remove_todo, toggle_todo } from "./reducer";

// const initialState: Istate = {
//   todolist: []
// };

function init(initTodolist:Iitem[]):Istate{
  return {
    todolist:initTodolist
  }
}

const Todos: FC = (): ReactElement => {
  // const [todolist,setTodolist]=useState<Iitem[]>([]);
  const [state, dispach] = useReducer(todoReducer, [],init);
  useEffect(() => {
    const initTodolist=JSON.parse(localStorage.getItem('todolist') || '[]')
    if(initTodolist.length){
      dispach(init_todo(initTodolist))
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem('todolist',JSON.stringify(state.todolist))
  },[state.todolist])

  const addTodo = useCallback((todo: Iitem):void => {
    // setTodolist((todolist:Iitem[])=>[...todolist,todo])
    dispach(add_todo(todo));
  }, []);
  const hanldeToggle = useCallback((id: number):void => {
    dispach(toggle_todo(id));
  }, []);
  const handleRemove = useCallback((id: number):void => {
    dispach(remove_todo(id));
  },[]);
  return (
    <div>
      <Minput todolist={state.todolist} addItem={addTodo} />
      <List
        todolist={state.todolist}
        toggle={id => hanldeToggle(id)}
        remove={id => handleRemove(id)}
      />
    </div>
  );
};

export default Todos;
