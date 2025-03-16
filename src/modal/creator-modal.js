import createElement from "../utilities/creator.js";
import { data, formDataHandler } from "../utilities/data-handler.js";
import { render, clearRender } from "../utilities/render.js";
import {
    buttonAddParams,
    buttonCancelParams,
    buttonEditParams,
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

const creatorModal = (status, noteInfo = {}) => {
    const isForm = document.querySelector("#form");
    if (!isForm) {
        const containerApp = document.body;

        const fadeBlockElement = createElement(fadeBlockParams);
        const modalElement = createElement(modalParams);

        if (noteInfo.id) {
            modalElement.setAttribute("data-id", noteInfo.id);
        }

        const headerModalElement = createElement(headerModalParams);
        let inputTitle = null;
        let textarea = null;
        let checkbox = null;

        if (noteInfo.title) {
            const updateInputTitleParams = inputTitleParams;
            updateInputTitleParams.value = noteInfo.title;
            inputTitle = createElement(updateInputTitleParams);
        } else {
            inputTitle = createElement(inputTitleParams);
            inputTitle.value = "";
        }

        if (noteInfo.textarea) {
            const updateTextareaParams = textareaParams;
            updateTextareaParams.value = noteInfo.textarea;
            textarea = createElement(updateTextareaParams);
        } else {
            textarea = createElement(textareaParams);
            textarea.value = "";
        }

        if (noteInfo.checkbox) {
            const updateCheckboxParams = checkboxParams;
            updateCheckboxParams.attrParams.checked = noteInfo.checkbox;
            checkbox = createElement(updateCheckboxParams);
        } else {
            const regularParamsCheckbox = checkboxParams;
            delete regularParamsCheckbox.attrParams.checked;
            checkbox = createElement(regularParamsCheckbox);
        }

        let buttonAction = null;

        if (status) {
            buttonAction = createElement(buttonEditParams);
        } else {
            buttonAction = createElement(buttonAddParams);
        }

        const buttonCancel = createElement(buttonCancelParams);
        const wrapperElement = createElement(wrapperElementParams);
        const wrapperCheckbox = createElement(wrapperCheckboxParams);
        const fakeCheckbox = createElement(fakeCheckboxParams);

        modalElement.insertAdjacentElement("beforeend", headerModalElement);
        modalElement.insertAdjacentElement("beforeend", textarea);
        modalElement.insertAdjacentElement("beforeend", wrapperElement);

        wrapperElement.insertAdjacentElement("beforeend", buttonCancel);
        wrapperElement.insertAdjacentElement("beforeend", buttonAction);

        headerModalElement.insertAdjacentElement("beforeend", inputTitle);
        headerModalElement.insertAdjacentElement("beforeend", wrapperCheckbox);
        wrapperCheckbox.insertAdjacentElement("beforeend", checkbox);
        wrapperCheckbox.insertAdjacentElement("beforeend", fakeCheckbox);

        containerApp.insertAdjacentElement("beforeend", fadeBlockElement);
        containerApp.insertAdjacentElement("beforeend", modalElement);

        inputTitle.focus();

        if (modalElement) {
            modalElement.addEventListener("submit", (event) => {
                console.log(event);

                event.preventDefault();
                formDataHandler(event.target);
                clearRender();
                render(data.favoritesNotes);
                render(data.regularNotes);
                modalElement.remove();
                fadeBlockElement.remove();
            });
        }

        buttonCancel.addEventListener("click", () => {
            modalElement.remove();
            fadeBlockElement.remove();
        });

        fadeBlockElement.addEventListener("click", () => {
            modalElement.remove();
            fadeBlockElement.remove();
        });
    }
};

export default creatorModal;
// 1. Очистка старых данных из модалки
// 2. Правка на калвишу enter
