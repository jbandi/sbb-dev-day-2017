import React from 'react';
import PropTypes from 'prop-types'
import ToDoItem from './ToDoItem';

 const ToDoList = (props) => (
    <ul id="todo-list" className="todo-list">
        {
            props.todos.map((todo, index) => {
                return (
                    <ToDoItem key={index}
                              todo={todo}
                              onRemoveToDo={props.onRemoveToDo}
                    />
                );
            })
        }
    </ul>
);

 ToDoList.propTypes = {
     todos: PropTypes.array.isRequired,
     onRemoveToDo: PropTypes.func.isRequired
 };

export default ToDoList;
