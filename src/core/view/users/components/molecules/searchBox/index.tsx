import React, { useState } from "react";
import AtomInputText from "../../../../components/atoms/input";
import AtomButton from "../../../../components/atoms/button";

type SearchBoxProps = {
    searchValue: string;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBox = ({
    searchValue,
    inputValue,
    setInputValue,
    setSearchValue,
}: SearchBoxProps) => {
    const [showError, setShowError] = useState(false);

    const handleSearch = () => {
        if (inputValue === "") {
            setShowError(true);
            return;
        }

        setSearchValue(inputValue);
        setShowError(false);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (inputValue === "") {
                setShowError(true);
                return;
            }

            setSearchValue(inputValue);
            setShowError(false);
        }
    };

    const handleClearInput = () => {
        setInputValue("");
        setSearchValue("");
        setShowError(false);
    };

    const isEmptyInput = inputValue === "";
    const isEmptySearch = searchValue === "";

    return (
        <div className="w-full mb-5">
            <div className="mb-5">
                <AtomInputText
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    onKeyDown={handleKeyPress}
                    placeholder="Enter username"
                    showError={showError}
                    helperText="Please input username to search!"
                />
                {showError && <p className="text-red-400 text-sm mt-1"></p>}
            </div>
            <div
                className={`grid ${
                    isEmptyInput ? "grid-cols-1" : "grid-cols-2"
                }  gap-2`}
            >
                <AtomButton
                    onClick={handleSearch}
                    text="Search"
                    variant="primary"
                />
                {!isEmptyInput && (
                    <AtomButton
                        onClick={handleClearInput}
                        text="Clear"
                        variant="disabled"
                    />
                )}
            </div>
            {!isEmptySearch && !isEmptyInput && (
                <p className="text-sm">
                    Showing user for "
                    <span className="font-bold">{searchValue}</span>"
                </p>
            )}
        </div>
    );
};

export default SearchBox;
