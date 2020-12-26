import { ACTION_TYPE, Iaction, Iitem, Istate } from "../../types";

function todoReducer(state: Istate, action: Iaction): Istate {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.INIT_TODOS:
      return {
        ...state,
        todolist: payload as Iitem[]
      }
    case ACTION_TYPE.ADD_TODOS:
      return {
        ...state,
        todolist: [...state.todolist, payload as Iitem]
      };
    case ACTION_TYPE.REMOVE_TODOS:
      return {
        ...state,
        todolist: state.todolist.filter(todo => todo.id !== payload)
      };
    case ACTION_TYPE.TOGGLE_TODOS:
      return {
        ...state,
        todolist:state.todolist.map(todo=>{
          if(todo.id===payload){
            return {
              ...todo,
              completed:!todo.completed
            }
          }
          return todo
        })
      };
    default:
      return state;
  }
}

const init_todo=(payload:Iitem[])=>{
  return {
    type:ACTION_TYPE.INIT_TODOS,
    payload
  }
}

const add_todo = (payload: Iitem) => {
  return {
    type: ACTION_TYPE.ADD_TODOS,
    payload
  };
};

const remove_todo = (payload:number) => {
  return {
    type: ACTION_TYPE.REMOVE_TODOS,
    payload
  };
};

const toggle_todo = (payload: number) => {
  return {
    type: ACTION_TYPE.TOGGLE_TODOS,
    payload
  };
};

export { todoReducer, init_todo,add_todo,remove_todo,toggle_todo };
