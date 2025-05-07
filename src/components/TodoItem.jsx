export default function TodoItem({ item, onToggleComplete, onDeleteTodo }) {
    return (
        <li className="todo-item">
            <label
                htmlFor={item.id}
                className="flex items-center rounded-full cursor-pointer relative">
                <input
                    type="checkbox"
                    id={item.id}
                    checked={item.completed}
                    onChange={() => onToggleComplete(item.id)}
                    className="check-todo w-6 h-6 appearance-none cursor-pointer transition border border-light-veryLightgrayishBlue
                     dark:border-dark-veryDarkGrayishBlue1 rounded-full"
                />
                <img
                    src="/images/icon-check.svg"
                    alt="Check"
                    className="check absolute w-3 h-3 translate-x-1/2 opacity-0 transition"
                />
            </label>
            <p className={`todo ${item.completed ? 'checked' : ''}`}>
                {item.description}
            </p>
            <button
                aria-label="Delete Todo"
                onClick={() => onDeleteTodo(item.id)}>
                <img
                    src="/images/icon-cross.svg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none"
                />
            </button>
        </li>
    );
}
