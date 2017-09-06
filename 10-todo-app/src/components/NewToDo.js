import React from 'react';
import PropTypes from 'prop-types';

class NewToDo extends React.Component {

    static propTypes = {
        onAddToDo: PropTypes.func.isRequired
    };

    render(){
        return (
            <form className="new-todo" onSubmit={this.addToDo}>
                <input id="todo-text" type="text"
                       name="newToDoText"
                       ref={elem => this.newToDoText = elem}
                       placeholder="What needs to be done?"
                       autoFocus
                       autoComplete="off"/>
                <button id="add-button" className="add-button">+</button>
            </form>
        )
    }

    addToDo = (e) => {
        e.preventDefault();
        this.props.onAddToDo(this.newToDoText.value);
        this.newToDoText.value = '';
    };
}

export default NewToDo;
