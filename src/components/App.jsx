import { useState } from 'react';
import Header from './Header.jsx';
import Form from './Form.jsx';
import TodoList from './TodoList.jsx';
import SortTodo from './SortTodo.jsx';

function App() {
    return (
        <div className="flex flex-col justify-between max-w-[37.5rem] mx-auto translate-y-[5%] lg:translate-y-[20%]">
            <Header />
            <Form />
            <TodoList />
            <SortTodo />
        </div>
    );
}

export default App;
