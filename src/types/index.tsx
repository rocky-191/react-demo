export interface Iitem {
  id: number;
  content: string;
  completed: boolean;
}

export interface Istate {
  todolist: Iitem[];
}

export interface Iaction {
  type: ACTION_TYPE;
  payload: Iitem | Iitem[] | number;
}

export enum ACTION_TYPE {
  INIT_TODOS='INIT_TODOS',
  ADD_TODOS = "ADD_TODOS",
  REMOVE_TODOS = "REMOVE_TODOS",
  TOGGLE_TODOS = "TOGGLE_TODOS"
}
