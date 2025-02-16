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
    return wrapperButton;
};

export default filterButtonsCreator;
