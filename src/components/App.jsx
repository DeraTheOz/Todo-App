import { useState } from 'react';
import Header from './Header.jsx';
import Form from './Form.jsx';
import TodoList from './TodoList.jsx';
import TodoControls from './TodoControls.jsx';

function App() {
    return (
        <div className="flex flex-col justify-between max-w-[37.5rem] mx-auto translate-y-[5%] lg:translate-y-[12%]">
            <Header />
            <Form />
            <TodoList />
            <TodoControls />
        </div>
    );
}

export default App;
