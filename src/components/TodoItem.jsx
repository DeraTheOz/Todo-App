export default function TodoItem() {
    return (
        <div className="todo-item">
            <label
                htmlFor="check-box"
                className="flex items-center rounded-full cursor-pointer relative">
                <input
                    type="checkbox"
                    id="check-box"
                    className="check-todo w-6 h-6 appearance-none cursor-pointer transition border border-light-veryLightgrayishBlue
                     dark:border-dark-veryDarkGrayishBlue1 rounded-full"
                />
                <img
                    src="/images/icon-check.svg"
                    alt="Check"
                    className="check absolute w-3 h-3 translate-x-1/2 opacity-0 transition"
                />
            </label>
            <p className="todo checke">Complete React Course</p>
            <div>
                <img
                    src="/images/icon-cross.svg"
                    alt="Remove"
                    className="cursor-pointer"
                />
            </div>
        </div>
    );


}
