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
        activeButton(e);
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

const activeButton = (e) => {
    const parent = e.target.closest("#buttonsWrapper");
    const activedButtons = parent.querySelectorAll(".active");
    activedButtons.forEach((btn) => {
        btn.classList.remove("active");
    });
    if (e.target.closest("[data-btn]")) {
        e.target.classList.add("active");
    }
};

export default filterButtonsCreator;
