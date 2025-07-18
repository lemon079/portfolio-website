import React from "react";
import { Loader as PageLoader } from "lucide-react";
const Loader: React.FC<{ text?: string }> = ({ text = "Loading..." }) => {
    return (
        <div className="flex items-center justify-center flex-col gap-2 p-8 text-gray-300 animate-fade-in">
            <PageLoader className="size-8 animate-spin" />
            <span className="text-sm">{text}</span>
        </div>
    );
};

export default Loader;
