import createbuttonAddNote from "../button-add-note/create-button-add-note.js";
import createHeader from "../header/header-view.js";
import { data } from "./data-handler.js";
import { clearRender, render } from "./render.js";

const initApp = () => {
    const containerApp = document.body;

    const header = createHeader();
    containerApp.insertAdjacentElement("beforeend", header);

    const buttonAddNote = createbuttonAddNote();
    containerApp.insertAdjacentElement("beforeend", buttonAddNote);

    clearRender();
    render(data.favoritesNotes);
    render(data.regularNotes);
};

export default initApp;
