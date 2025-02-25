const buttonAddNoteParams = {
    tagName: "button",
    classList: [
        "mt-6",
        "flex",
        "mx-auto",
        "text-cyan-600",
        "items-center",
        "gap-2",
        "text-2xl",
        "dark:text-white",
        "font-semibold",
        "outline-none",
    ],
    text: "Add Note",
};

const buttonAddNoteIconParams = {
    tagName: "span",
    classList: [
        "w-10",
        "h-10",
        "block",
        "bg-[url('/btn-add-note-icon.svg')]",
        "dark:bg-[url('/btn-add-note-icon-dark.svg')]",
        "bg-cover",
    ],
};

export { buttonAddNoteParams, buttonAddNoteIconParams };
