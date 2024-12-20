import createElement from "../utilities/creator.js";
import { data, formDataHandler } from "../utilities/data-handler.js";
import { render, clearRender } from "../utilities/render.js";
import {
    buttonAddParams,
    buttonCancelParams,
    checkboxParams,
    fadeBlockParams,
    fakeCheckboxParams,
    headerModalParams,
    inputTitleParams,
    modalParams,
    textareaParams,
    wrapperCheckboxParams,
    wrapperElementParams,
} from "./modal-params.js";

const creatorModal = () => {
    const containerApp = document.body;
    const fadeBlockElement = createElement(fadeBlockParams);
    const modalElement = createElement(modalParams);
    const headerModalElement = createElement(headerModalParams);
    const inputTitle = createElement(inputTitleParams);
    const checkbox = createElement(checkboxParams);
    const textarea = createElement(textareaParams);
    const buttonAdd = createElement(buttonAddParams);
    const buttonCancel = createElement(buttonCancelParams);
    const wrapperElement = createElement(wrapperElementParams);
    const wrapperCheckbox = createElement(wrapperCheckboxParams);
    const fakeCheckbox = createElement(fakeCheckboxParams);

    modalElement.insertAdjacentElement("beforeend", headerModalElement);
    modalElement.insertAdjacentElement("beforeend", textarea);
    modalElement.insertAdjacentElement("beforeend", wrapperElement);

    wrapperElement.insertAdjacentElement("beforeend", buttonCancel);
    wrapperElement.insertAdjacentElement("beforeend", buttonAdd);

    headerModalElement.insertAdjacentElement("beforeend", inputTitle);
    headerModalElement.insertAdjacentElement("beforeend", wrapperCheckbox);
    wrapperCheckbox.insertAdjacentElement("beforeend", checkbox);
    wrapperCheckbox.insertAdjacentElement("beforeend", fakeCheckbox);

    containerApp.insertAdjacentElement("beforeend", fadeBlockElement);
    containerApp.insertAdjacentElement("beforeend", modalElement);

    modalElement.addEventListener("submit", (event) => {
        formDataHandler(event, modalElement);
        clearRender();
        render(data.favoritesNotes);
        render(data.regularNotes);
        modalElement.remove();
        fadeBlockElement.remove();
    });

    buttonCancel.addEventListener("click", () => {
        modalElement.remove();
        fadeBlockElement.remove();
    });

    fadeBlockElement.addEventListener("click", () => {
        modalElement.remove();
        fadeBlockElement.remove();
    });
};

export default creatorModal;
