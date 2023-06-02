import React from "react";

type AtomInputProps = {
    showError?: boolean;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange: (e: any) => void;
    value?: any;
    placeholder: string;
    helperText: string;
};

const AtomInputText = ({
    showError,
    onKeyDown,
    onChange,
    value,
    placeholder,
    helperText,
}: AtomInputProps) => {
    return (
        <>
            <input
                type="text"
                className="w-full h-[50px] bg-slate-200 p-3 text-black"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            {showError && (
                <p className="text-red-400 text-sm mt-1">{helperText}</p>
            )}
        </>
    );
};

export default AtomInputText;
