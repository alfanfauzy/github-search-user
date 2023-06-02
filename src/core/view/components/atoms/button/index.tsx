import React from "react";
import { useMemo } from "react";

type AtomButtonProps = {
    onClick?: () => void;
    text: string;
    disabled?: false;
    variant?: "primary" | "disabled";
};

const AtomButton = ({ text, onClick, disabled, variant }: AtomButtonProps) => {
    const variantButton = useMemo(() => {
        switch (variant) {
            case "primary":
                return "bg-blue-400";

            default:
                return "bg-red-400";
        }
    }, [variant]);

    const disabledButton =
        disabled &&
        `disabled:bg-slate-100 disabled:text-gray-300 disabled:cursor-none`;

    return (
        <button
            className={`${variantButton} rounded-none w-full text-white text-md font-semibold p-2 mb-2 ${disabledButton}`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default AtomButton;
