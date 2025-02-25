import createElement from "../utilities/creator.js";
import filterInputParams from "./filter-notes-params.js";

const filterCreator = () => {
    const filterInput = createElement(filterInputParams);
    filterInput.addEventListener("input", (e) => filter(e));

    return filterInput;
};

const filter = (e) => {
    const inputValue = e.target.value.toLowerCase();

    const foundedNotes = document.querySelectorAll("[data-note-item]");

    foundedNotes.forEach((note) => {
        const noteText = note.querySelector("[data-note-text]").innerText;
        const noteHeader = note.querySelector("[data-note-header]").innerText;

        if (
            noteText.toLowerCase().includes(inputValue) ||
            noteHeader.toLowerCase().includes(inputValue)
        ) {
            note.style.display = "block";
        } else {
            note.style.display = "none";
        }
    });
};

export default filterCreator;
