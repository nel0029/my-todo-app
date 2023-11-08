/** @format */

import React from "react";
import "./style.css";
import { Todos } from "../model";
import Todo from "./Todo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  completedTodos: Todos[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}
const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="todo-list">
      <Droppable droppableId="active-tasks">
        {(provided) => (
          <div
            className="todo-list-active-tasks"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className="todo-list-heading">Active Tasks</div>
            {todos.map((todo: Todos, index: number) => (
              <Todo
                key={todo.id}
                index={index}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="completed-tasks">
        {(provided) => (
          <div
            className="todo-list-completed-tasks"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className="todo-list-heading">Completed Tasks</div>
            {completedTodos.map((todo: Todos, index: number) => (
              <Todo
                key={todo.id}
                index={index}
                todo={todo}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
