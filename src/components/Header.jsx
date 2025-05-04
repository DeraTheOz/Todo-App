import { useState } from 'react';

export default function Header() {
    return (
        <div className="flex justify-between">
            <h1 className="uppercase text-light-veryLightGray text-3xl font-bold tracking-[.8rem]">
                Todo
            </h1>

            <img
                src="/images/icon-moon.svg"
                alt="Moon Icon"
                className="w-6 h-6"
            />
        </div>
    );
}
