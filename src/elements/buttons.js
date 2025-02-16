import createElement from "../utilities/creator.js";
import {
    allNotesButtonParams,
    buttonsWrapperParams,
    favoriteNotesButtonParams,
} from "./buttons-params.js";

const filterButtonsCreator = () => {
    const wrapperButton = createElement(buttonsWrapperParams);
    const allNotesButton = createElement(allNotesButtonParams);
    const favoriteNotesButton = createElement(favoriteNotesButtonParams);

    wrapperButton.prepend(allNotesButton, favoriteNotesButton);
    wrapperButton.addEventListener("click", (e) => {
        filterNotes(e);
    });
    return wrapperButton;
};

const filterNotes = (e) => {
    console.log(e);
    // 1. Создать флаговую переменную для текущей кнопки
    // 2. Проверить, что внутри переменной лежит кнопка с нужным id
    // 3. В зависимости от условия запускать render с нужным массивом (перед этим запустить очистку рендера)
    // 4. Получение нужного массива можно найти в creator-modal на 97-98 строке
};

export default filterButtonsCreator;
