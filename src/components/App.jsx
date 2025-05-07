import { useState } from 'react';
import Header from './Header.jsx';
import Form from './Form.jsx';
import TodoList from './TodoList.jsx';


function App() {
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem('todoList');
        return savedItems ? JSON.parse(savedItems) : [];
    });

    function handleAddTodo(item) {
        setItems((todoItems) => {
            const updatedItems = [...todoItems, item];
            localStorage.setItem('todoList', JSON.stringify(updatedItems));
            return updatedItems;
        });
    }

    function handleToggleComplete(id) {
        setItems((items) => {
            const updatedItems = items.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            );
            localStorage.setItem('todoList', JSON.stringify(updatedItems));
            return updatedItems;
        });
    }

    function handleDeleteTodo(id) {
        setItems((items) => {
            const updatedItems = items.filter((item) => item.id !== id);
            localStorage.setItem('todoList', JSON.stringify(updatedItems));
            return updatedItems;
        });
    }

    function handleClearCompleted() {
        setItems((items) => {
            const updatedItems = items.filter((item) => !item.completed);
            localStorage.setItem('todoList', JSON.stringify(updatedItems));
            return updatedItems;
        });
    }

    return (
        <div className="flex flex-col justify-between max-w-[37.5rem] mx-auto">
            <Header />
            <Form onAddTodo={handleAddTodo} />
            <TodoList
                items={items}
                onToggleComplete={handleToggleComplete}
                onDeleteTodo={handleDeleteTodo}
                onClearCompleted={handleClearCompleted}
            />
        </div>
    );
}

export default App;
