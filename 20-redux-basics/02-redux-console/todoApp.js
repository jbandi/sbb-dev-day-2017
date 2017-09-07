const {createStore, applyMiddleware} = require('redux');

const defaultState = {
    todos: [
        {
            title: 'Learn JavaScript',
        },
        {
            title: 'Learn React',
        },
        {
            title: 'Learn Redux',
        }
    ]
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {todos: [...state.todos, action.newToDo]});
        case 'REMOVE_TODO':
            return Object.assign({}, state, {todos: [...state.todos.slice(0, action.index), ...state.todos.slice(action.index + 1)]});
        default:
            return state;
    }
}

const store = createStore(reducer, defaultState);

logTodos();
store.subscribe(() => logTodos());

function logTodos() {
    console.log(`You have ${store.getState().todos.length} todos:`);
    for (let todo of store.getState().todos){
        console.log(`- ${todo.title}`);
    }
}


store.dispatch({
    type: 'ADD_TODO',
    newToDo: {
        title: 'Learn Angular',
    }
});


store.dispatch({
    type: 'ADD_TODO',
    newToDo: {
        title: 'Learn VueJS',
    }
});


store.dispatch({
    type: 'REMOVE_TODO',
    index: 2
});
