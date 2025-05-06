import ItemCount from './ItemCount.jsx';
import ClearCompleted from './ClearCompleted.jsx';
import FilterButtons from './FilterButtons.jsx';

export default function TodoControls() {
    const filters = ['All', 'Active', 'Completed'];

    return (
        <div className="grid grid-cols-4 gap-y-4 text-sm md:shadow-xl">
            {/* MOBILE START */}
            <div
                className="col-start-1 col-span-6 flex justify-between shadow-lg rounded-b-md overflow-hidden
            md:hidden md:pointer-events-none md:shadow-none md:rounded-none">
                <div className="w-full"> <ItemCount /></div>

                <div className="w-full">
                    <ClearCompleted />
                </div>
            </div>
            {/* MOBILE END */}

            {/* DESKTOP START */}
            <div
                className="hidden col-start-1 col-end-3 rounded-bl-md overflow-hidden
                md:block md:col-end-2 md:shadow-none">
                <ItemCount />
            </div>

            <div
                className="hidden col-start-3 col-end-5 rounded-br-md overflow-hidden
                md:block md:col-start-4 md:col-end-6 md:shadow-none">
                <ClearCompleted />
            </div>
            {/* DESKTOP END */}

            <div
                className="row-start-2 col-span-5 mb-6 flex justify-center items-center gap-4 p-4 
                text-base text-light-lightGrayishBlue font-bold rounded-md shadow-2xl bg-light-veryLightGray 
                md:row-start-1 md:col-start-2 md:col-end-4 md:mb-0 md:shadow-none md:rounded-none
                dark:text-dark-veryDarkGrayishBlue1 dark:bg-dark-veryDarkDesaturatedBlue">
                <FilterButtons filters={filters} />
            </div>
        </div>
    );
}

//////
// return (
//     <div className="grid grid-cols-4 gap-y-4 text-sm md:shadow-xl">
//         <div
//             className="col-start-1 col-end-3 rounded-bl-md shadow-[2px_4px_6px_-2px_rgba(0,0,0,0.1)] overflow-hidden
//             md:col-end-2 md:shadow-none">
//             <p
//                 className="text-light-lightGrayishBlue font-semibold px-4 py-6 bg-light-veryLightGray
//             dark:bg-dark-veryDarkDesaturatedBlue dark:text-dark-veryDarkGrayishBlue1">
//                 X items left
//             </p>
//         </div>

//         <div
//             className="col-start-3 col-end-5 rounded-br-md shadow-[5px_4px_6px_-2px_rgba(0,0,0,0.1)] overflow-hidden
//             md:col-start-4 md:col-end-6 md:shadow-none">
//             <p
//                 className="text-right text-light-lightGrayishBlue font-semibold px-4 py-6 bg-light-veryLightGray hover:text-light-darkGrayishBlue cursor-pointer transition
//             dark:bg-dark-veryDarkDesaturatedBlue dark:text-dark-veryDarkGrayishBlue1 dark:hover:text-dark-lightGrayishBlueHover">
//                 Clear Completed
//             </p>
//         </div>

//         <div
//             className="row-start-2 col-span-5 mb-6 flex justify-center items-center gap-4 p-4
//             text-base text-light-lightGrayishBlue font-bold rounded-md shadow-2xl bg-light-veryLightGray
//             md:row-start-1 md:col-start-2 md:col-end-4 md:mb-0 md:shadow-none md:rounded-none
//             dark:text-dark-veryDarkGrayishBlue1 dark:bg-dark-veryDarkDesaturatedBlue">
//             {filters.map((filter, i) => (
//                 <span className="category activ" key={i}>
//                     {filter}
//                 </span>
//             ))}
//         </div>
//     </div>
// );
