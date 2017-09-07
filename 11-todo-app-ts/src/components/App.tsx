import * as React from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import NewToDo from './NewToDo';
import { ToDo } from '../model/ToDo';

interface AppState { todos: ToDo[]; }

class App extends React.Component<{}, AppState> {

    state: AppState = {
        // todos: ['Learn React', 'Learn Angular', 'Learn VueJS'],
        todos: [],
    };

    render() {

        return (
            <div className="App">
                <section className="todoapp">
                    <div className="header">
                        <h1 id="title">Simplistic ToDo</h1>
                        <h4>A most simplistic ToDo List in modern JavaScript.</h4>
                    </div>

                    <NewToDo onAddToDo={this.addToDo}/>

                    <section className="main">
                        <TodoList todos={this.state.todos} onRemoveToDo={this.removeToDo}/>
                    </section>

                </section>
                <footer className="info">
                    <p>JavaScript Example / Initial template from
                        <a href="https://github.com/tastejs/todomvc-app-template">todomvc-app-template</a>
                    </p>
                </footer>
            </div>
        );
    }

    componentDidMount() {
        axios.get('http://localhost:3456/todos')
            .then(r => this.setState({todos: r.data.data}));
    }

    addToDo = (newToDoText: string) => {

        const newToDo = {id: 123, title: newToDoText, completed: false};
        const newTodos = [...this.state.todos, newToDo];
        this.setState({todos: newTodos});
        axios.post('http://localhost:3456/todos', newToDo)
            .then(r => {
                const newToDos = [...this.state.todos.slice(0, -1), r.data.data];
                this.setState({todos: newToDos});
            });
    }

    removeToDo = (todo: ToDo) => {
        let newTodos = this.state.todos.filter(t => t !== todo);
        this.setState({todos: newTodos});
        axios.delete('http://localhost:3456/todos/' + todo.id);
    }
}

export default App;
