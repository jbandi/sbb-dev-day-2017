import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = (props) => {

    const deleteButton = props.todo.id
        ? <button className="delete-button" onClick={() => props.onRemoveToDo(props.todo)}>X</button>
        : null;

    return (
        <li>
            {props.todo.title}
            {deleteButton}
        </li>
    );
};

ToDoItem.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired,
    onRemoveToDo: PropTypes.func.isRequired
};

export default ToDoItem;
