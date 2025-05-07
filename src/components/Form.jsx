import { useState } from 'react';

export default function Form({ onAddTodo }) {
    const [description, setDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;

        const newTodo = {
            description,
            completed: false,
            id: crypto.randomUUID()
        };
        onAddTodo(newTodo);

        // Clear Input Field
        setDescription('');
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-4 mt-8 mb-4 px-4 py-4 bg-light-veryLightGray 
                shadow-lg dark:bg-dark-veryDarkDesaturatedBlue rounded-md">
            <label
                htmlFor="checkbox"
                className="flex items-center cursor-pointer relative">
                <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    className="w-6 h-6 rounded-full appearance-none transition border border-light-veryLightgrayishBlue 
                    dark:border-dark-veryDarkGrayishBlue1"
                    disabled
                />
            </label>

            <input
                type="text"
                placeholder="Create a new todo"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-2 text-light-veryDarkGryishBlue dark:text-dark-lightGrayishBlue dark:placeholder-dark-darkGrayishBlue bg-light-veryLightGray 
                    dark:bg-inherit border-none outline-0"
            />
        </form>
    );
}
