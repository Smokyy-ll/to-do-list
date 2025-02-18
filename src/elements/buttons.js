import { render } from "../utilities/render.js";
import createElement from "../utilities/creator.js";
import { clearRender } from "../utilities/render.js";
import {
    allNotesButtonParams,
    buttonsWrapperParams,
    favoriteNotesButtonParams,
} from "./buttons-params.js";
import { data } from "../utilities/data-handler.js";

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
    if (e.target.closest("#btnFavNotes")) {
        clearRender();
        render(data.favoritesNotes);
    } else if (e.target.closest("#btnAllNotes")) {
        clearRender();
        render(data.favoritesNotes);
        render(data.regularNotes);
    }
};

export default filterButtonsCreator;
