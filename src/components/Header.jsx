import { useState } from 'react';

export default function Header() {
    return (
        <div className="flex justify-between items-center">
            <h1 className="uppercase text-light-veryLightGray text-4xl font-bold dark:text-dark-veryDarkBlue tracking-[1.5rem]">
                Todo
            </h1>

            <img
                src="/images/icon-moon.svg"
                alt="Moon Icon"
                className="w-8 h-8"
            />
        </div>
    );
}

