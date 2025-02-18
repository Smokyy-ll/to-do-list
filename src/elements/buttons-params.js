const buttonsWrapperParams = {
    tagName: "div",
    classList: ["flex", "gap-4", "justify-center", "py-8"],
};

const allNotesButtonParams = {
    tagName: "button",
    classList: [
        "py-2",
        "px-4",
        "rounded-lg",
        "border-2",
        "border-cyan-600",
        "text-cyan-600",
        "font-bold",
        "text-lg",
        "tracking-wide",
        "min-w-[118px]",
        "hover:scale-105",
        "duration-300",
        "hover:bg-cyan-600",
        "hover:text-white",
    ],
    attrParams: {
        id: "btnAllNotes",
    },
    text: "All Notes",
};

const favoriteNotesButtonParams = {
    tagName: "button",
    classList: [
        "py-2",
        "px-4",
        "rounded-lg",
        "border-2",
        "border-cyan-600",
        "text-cyan-600",
        "font-bold",
        "text-lg",
        "tracking-wide",
        "min-w-[118px]",
        "hover:scale-105",
        "duration-300",
        "hover:bg-cyan-600",
        "hover:text-white",
    ],
    attrParams: {
        id: "btnFavNotes",
    },
    text: "Favorite",
};

export {
    buttonsWrapperParams,
    allNotesButtonParams,
    favoriteNotesButtonParams,
};
