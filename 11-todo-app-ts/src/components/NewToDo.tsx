import * as React from 'react';
import { SyntheticEvent } from 'react';

interface NewToDoProps {
    onAddToDo(text: string): void;
}

class NewToDo extends React.Component<NewToDoProps> {

    newToDoText: HTMLInputElement;

    render() {
        return (
            <form className="new-todo" onSubmit={this.addToDo}>
                <input
                    id="todo-text"
                    type="text"
                    name="newToDoText"
                    ref={elem => this.newToDoText = elem!}
                    placeholder="What needs to be done?"
                    autoFocus={true}
                    autoComplete="off"
                />
                <button id="add-button" className="add-button">+</button>
            </form>
        );
    }

    addToDo = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onAddToDo(this.newToDoText.value);
        this.newToDoText.value = '';
    }
}

export default NewToDo;
