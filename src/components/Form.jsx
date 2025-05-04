export default function Form() {
    return (
        <form
            className="flex items-center gap-4 mt-8 mb-4 px-4 py-3 bg-light-veryLightGray 
                dark:bg-dark-veryDarkDesaturatedBlue rounded-md">
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

            <input
                type="text"
                placeholder="Create a new todo"
                className="w-full px-2 text-light-veryDarkGryishBlue dark:text-dark-lightGrayishBlue dark:placeholder-dark-darkGrayishBlue bg-light-veryLightGray 
                    dark:bg-inherit border-none outline-0"
            />
        </form>
    );
}

// <div className="flex items-center gap-4 mt-8 mb-4 px-6 py-6 bg-light-veryLightGray dark:bg-dark-desaturatedBlue rounded-md">
//                 <label className="flex items-center cursor-pointer">
//                     <div
//                         className="relative w-7 h-7 rounded-full border border-light-veryLightgrayishBlue dark:border-dark-veryDarkGrayishBlue1
//                         bg-transparent peer-checked:bg-checkbox-bg flex items-center justify-center transition-colors duration-300 overflow-hidden">
//                         <input
//                             type="checkbox"
//                             className="w-full h-full absolute opacity-0 cursor-pointer peer"
//                         />
//                         {/*<img
//                             src="/images/icon-check.svg"
//                             alt="Check"
//                             className="w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity duration-300 pointer-events-none"
//                         />*/}
//                     </div>
//                 </label>

//                 <input
//                     type="text"
//                     placeholder="Create a new todo"
//                     className="w-full px-2 text-light-veryDarkGrayishBlue dark:text-dark-lightGrayishBlue dark:placeholder-dark-darkGrayishBlue bg-light-veryLightGray dark:bg-inherit border-none outline-0"
//                 />
//             </div>
