import { useState } from 'react';
import Header from './Header.jsx';
import Form from './Form.jsx';

function App() {
    return (
        <div className="min-w-[20rem] max-w-[37.5rem] flex flex-col justify-between mt-16 border border-red-400">
            <Header />
            <Form />
        </div>
    );
}

export default App;
