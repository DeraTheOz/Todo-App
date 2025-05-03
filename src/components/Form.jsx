export default function Form() {
    return (
        <form className="">
            <div className="flex items-center gap-4 w-80 mt-8 mb-4 bg-light-veryLightGray p-4 rounded-md">
                <input type="checkbox" className="w-4 h-4 rounded-full" />
                <input
                    type="text"
                    placeholder="Create a new todo"
                    className="inline-block"
                />
            </div>
        </form>
    );
}
