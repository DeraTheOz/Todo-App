import { useState } from 'react';
import TodoItem from './TodoItem.jsx';

export default function TodoList({
    items,
    onToggleComplete,
    onDeleteTodo,
    onClearCompleted
}) {
    const [sortBy, setSortBy] = useState('All');
    const filters = ['All', 'Active', 'Completed'];
    let sortedItems;

    if (sortBy === 'All') sortedItems = items;

    if (sortBy === 'Active') {
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.completed) - Number(b.completed));
    }

    if (sortBy === 'Completed') {
        sortedItems = items
            .slice()
            .sort((a, b) => Number(b.completed) - Number(a.completed));
    }

    const completedItems = sortedItems.filter((item) => item.completed);
    const activeItems = sortedItems.length - completedItems.length;

    return (
        <>
            <div
                className="flex flex-col shadow-xl rounded-t-md overflow-hidden
                bg-light-veryLightGray dark:bg-dark-veryDarkDesaturatedBlue">
                <ul className="max-h-[23.158rem] overflow-scroll">
                    {sortedItems.map((item) => (
                        <TodoItem
                            item={item}
                            onToggleComplete={onToggleComplete}
                            onDeleteTodo={onDeleteTodo}
                            key={item.id}
                        />
                    ))}
                </ul>
            </div>

            {items.length > 0 && (
                <div className="grid grid-cols-4 gap-y-4 text-sm md:shadow-xl">
                    {/* MOBILE START */}
                    <div
                        className="col-start-1 col-span-6 flex justify-between shadow-lg rounded-b-md overflow-hidden
                        md:hidden md:pointer-events-none md:shadow-none md:rounded-none">
                        <div className="w-full">
                            <p
                                className="text-light-lightGrayishBlue font-semibold px-4 py-6 bg-light-veryLightGray
                                dark:bg-dark-veryDarkDesaturatedBlue dark:text-dark-veryDarkGrayishBlue1">
                                {activeItems} items left
                            </p>
                        </div>

                        <div className="w-full">
                            <p
                                className="text-right text-light-lightGrayishBlue font-semibold px-4 py-6 bg-light-veryLightGray
                                hover:text-light-darkGrayishBlue cursor-pointer transition dark:bg-dark-veryDarkDesaturatedBlue
                                dark:text-dark-veryDarkGrayishBlue1 dark:hover:text-dark-lightGrayishBlueHover"
                                onClick={onClearCompleted}>
                                Clear Completed
                            </p>
                        </div>
                    </div>
                    {/* MOBILE END */}

                    {/* DESKTOP START */}
                    <div className="hidden col-start-1 col-end-3 rounded-bl-md overflow-hidden md:block md:col-end-2 md:shadow-none">
                        <p
                            className="text-light-lightGrayishBlue font-semibold px-4 py-6 bg-light-veryLightGray
                            dark:bg-dark-veryDarkDesaturatedBlue dark:text-dark-veryDarkGrayishBlue1">
                            {activeItems} items left
                        </p>
                    </div>

                    <div className="hidden col-start-3 col-end-5 rounded-br-md overflow-hidden md:block md:col-start-4 md:col-end-6 md:shadow-none">
                        <p
                            className="text-right text-light-lightGrayishBlue font-semibold px-4 py-6 bg-light-veryLightGray
                            hover:text-light-darkGrayishBlue cursor-pointer transition dark:bg-dark-veryDarkDesaturatedBlue
                            dark:text-dark-veryDarkGrayishBlue1 dark:hover:text-dark-lightGrayishBlueHover"
                            onClick={onClearCompleted}>
                            Clear Completed
                        </p>
                    </div>
                    {/* DESKTOP END */}

                    <div
                        className="row-start-2 col-span-5 mb-6 flex justify-center items-center gap-4 p-4 text-base text-light-lightGrayishBlue font-bold rounded-md shadow-2xl bg-light-veryLightGray
                        md:row-start-1 md:col-start-2 md:col-end-4 md:mb-0 md:shadow-none md:rounded-none
                        dark:text-dark-veryDarkGrayishBlue1 dark:bg-dark-veryDarkDesaturatedBlue">
                        {filters.map((filter) => (
                            <p
                                className={`category ${
                                    sortBy === filter ? 'active' : ''
                                }`}
                                key={filter}
                                onClick={() => setSortBy(filter)}>
                                {filter}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
