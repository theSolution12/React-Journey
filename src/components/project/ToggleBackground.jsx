import { useState } from "react";

const ToggleBackground = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleBackground = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <div className={`flex h-screen items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <button
                onClick={toggleBackground}
                className={`rounded-lg p-4 text-white ${isDarkMode ? 'bg-gray-600' : 'bg-blue-500'}`}
            >
                Toggle Background
            </button>
        </div>
    );
}

export default ToggleBackground;