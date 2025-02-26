const fadeBlockParams = {
    tagName: "div",
    classList: [
        "w-screen",
        "h-screen",
        "bg-[#e2e8f046]",
        "backdrop-blur-sm",
        "absolute",
        "top-0",
        "left-0",
    ],
};

const modalParams = {
    tagName: "form",
    classList: [
        "absolute",
        "bg-white",
        "max-w-[915px]",
        "w-full",
        "rounded-lg",
        "bottom-2/4",
        "right-2/4",
        "translate-x-2/4",
        "translate-y-2/4",
        "py-9",
        "px-7",
    ],
    attrParams: {
        id: "form",
    },
};

const headerModalParams = {
    tagName: "div",
    classList: [
        "flex",
        "max-w-[362px]",
        "gap-2",
        "border-b-2",
        "border-cyan-600",
        "mb-3",
    ],
};

const inputTitleParams = {
    tagName: "input",
    classList: ["outline-none", "text-xl", "font-medium", "w-full"],
    attrParams: {
        type: "text",
        placeholder: "Title",
        name: "title",
    },
    value: "",
};

const wrapperCheckboxParams = {
    tagName: "label",
    classList: ["cursor-pointer"],
};

const fakeCheckboxParams = {
    tagName: "div",
    classList: ["custom-checkbox"],
};

const checkboxParams = {
    tagName: "input",
    classList: ["real-checkbox"],
    attrParams: {
        type: "checkbox",
        name: "checkbox",
    },
};

const textareaParams = {
    tagName: "textarea",
    classList: [
        "outline-none",
        "resize-y",
        "w-full",
        "min-h-[250px]",
        "max-h-[350px]",
        "mb-4",
        "focus:shadow-xl",
        "text-lg",
    ],
    attrParams: {
        placeholder: "Your note",
        name: "textarea",
    },
};

const wrapperElementParams = {
    tagName: "div",
    classList: ["flex", "gap-2", "justify-end"],
};

const buttonAddParams = {
    tagName: "button",
    classList: [
        "bg-cyan-600",
        "rounded-lg",
        "font-medium",
        "text-white",
        "px-4",
        "py-2",
        "min-w-[80px]",
    ],
    text: "Add",
    attrParams: {
        type: "submit",
    },
};

const buttonEditParams = {
    tagName: "button",
    classList: [
        "bg-cyan-600",
        "rounded-lg",
        "font-medium",
        "text-white",
        "px-4",
        "py-2",
        "min-w-[80px]",
    ],
    text: "Edit",
    attrParams: {
        type: "submit",
    },
};

const buttonCancelParams = {
    tagName: "button",
    classList: [
        "bg-red-800",
        "rounded-lg",
        "font-medium",
        "text-white",
        "px-4",
        "py-2",
        "min-w-[80px]",
    ],
    text: "Cancel",
    attrParams: {
        type: "button",
    },
};

export {
    fadeBlockParams,
    modalParams,
    headerModalParams,
    inputTitleParams,
    checkboxParams,
    textareaParams,
    wrapperElementParams,
    buttonAddParams,
    buttonCancelParams,
    wrapperCheckboxParams,
    fakeCheckboxParams,
    buttonEditParams,
};
