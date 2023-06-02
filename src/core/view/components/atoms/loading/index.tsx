import React from "react";

const AtomsLoading = () => {
    return (
        <div className="flex w-full items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 animate-spin">
                <div className="h-9 w-9 rounded-full bg-gray-200"></div>
            </div>
        </div>
    );
};

export default AtomsLoading;
