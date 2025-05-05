import TodoItem from './TodoItem.jsx';

export default function TodoList() {
    return (
        <div
            className="flex flex-col shadow-xl rounded-t-md overflow-hidden
            bg-light-veryLightGray dark:bg-dark-veryDarkDesaturatedBlue">
            <div className="max-h-[23.158rem] overflow-scroll">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
}
