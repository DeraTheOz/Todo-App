export default function TodoItem() {
    return (
        <div
            className="flex items-center gap-4 p-4 bg-light-veryLightGray 
                dark:bg-dark-veryDarkDesaturatedBlue border-b-2 border-light-veryLightGrayishBlue">
            <label
                htmlFor="check-box"
                className="flex items-center cursor-pointer relative">
                <input
                    type="checkbox"
                    id="check-box"
                    className="w-6 h-6 appearance-none cursor-pointer transition 
                        border border-light-veryLightgrayishBlue dark:border-dark-veryDarkGrayishBlue1 rounded-full"
                />
                <img
                    src="/images/icon-check.svg"
                    alt="Check"
                    className="check w-3 h-3 absolute left-1.5 opacity-0 transition"
                />
            </label>

            <p className="w-full px-2 dark:text-dark-lightGrayishBlue">
                Jog around the park
            </p>
            <div>
                <img src="/images/icon-cross.svg" alt="Remove" />
            </div>
        </div>
    );
}
