import TodoItem from './TodoItem.jsx';

export default function TodoList() {
    return (
        <div className="flex flex-col shadow-xl rounded-md mb-6 overflow-hidden">
            <div className="max-h-[23.158rem] overflow-scroll">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>

            <div
                className="flex justify-between items-center text-sm text-light-lightGrayishBlue font-semibold px-4 py-6 bg-light-veryLightGray 
                dark:bg-dark-veryDarkDesaturatedBlue">
                <p>X items left</p>
                <p className="hover:text-light-darkGrayishBlue cursor-pointer transition">
                    Clear Completed
                </p>
            </div>
        </div>
    );
}
